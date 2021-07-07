import { faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from '@unform/web';
import React from 'react';
import add from '../../components/Images/icon-add-rent.png';
import csv from '../../components/Images/icon-csv.png';
import { Input } from '../../components/Input';
import api from '../../services/api';
import styles from './style.module.scss';

export const ListRents: React.FC = () => {
	const rents = [
		{ endereco: 'Rua da paz', nome: 'Seu José' },
		{ endereco: 'Rua da saudade', nome: 'Seu Gustavo' },
		{ endereco: 'Rua da horta', nome: 'Dona Maria' },
	];
	return (
		<div>
			<div className={styles.head}>
				<Form onSubmit={handleSubmit}>
					<Input
						name={'search'}
						type={'text'}
						placeholder={'Search rents...'}
					/>
				</Form>
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
					{rents.map((rent, index) => (
						<li key={index}>
							<a href="/view">
								<label>
									{' '}
									<FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />{' '}
									{rent.endereco}
								</label>
								<label>
									{' '}
									<FontAwesomeIcon icon={faUser} size="2x" /> {rent.nome}{' '}
								</label>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

async function handleSubmit(data: any) {
	const user = JSON.parse(window.sessionStorage.getItem('user') || '');

	if (user) {
		data.authUser = user;
	}

	const response = await api.post('auth/', data);
	console.log('Response:', response.data);
}
