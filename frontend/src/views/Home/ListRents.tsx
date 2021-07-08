import { faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useEffect } from 'react';
import add from '../../components/Images/icon-add-rent.png';
import csv from '../../components/Images/icon-csv.png';
import api, { getUser } from '../../services/api';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

export const ListRents: React.FC = () => {
	const [rents, setRents] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadData = async () => {
			const response = await api.get('/contracts', {
				headers: {
					authUser: getUser().id,
				},
			});
			setRents(response.data);
			console.log('Data:', response.data);
			setIsLoading(false);
		};
		loadData();
	}, []);
	return (
		<div>
			<div className={styles.head}>
				<div className={styles.icons}>
					<a href="/add">
						<img src={add} alt={'something'} className={styles.add}></img>
					</a>
					<a href="/">
						<img src={csv} alt={'something'} className={styles.csv}></img>
					</a>
				</div>
			</div>
			<div className={styles.list}>
				<ul>
					{rents === [] ? (
						<li>You have no contracts yet</li>
					) : (
						rents.map((rent, index) => (
							<li
								key={index}
								style={{ display: 'flex', justifyContent: 'space-around' }}
							>
								<Link
									to={{
										pathname: '/view',
										state: {
											position: index,
										},
									}}
								>
									<label style={{ padding: '0 3rem' }}>
										{' '}
										<FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />{' '}
										{`${rent.property.address.city} - ${rent.property.address.zipCode}`}
									</label>
									<label style={{ padding: '0 3rem' }}>
										{' '}
										<FontAwesomeIcon icon={faUser} size="2x" />{' '}
										{rent.tenant.name}{' '}
									</label>
								</Link>
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	);
};
