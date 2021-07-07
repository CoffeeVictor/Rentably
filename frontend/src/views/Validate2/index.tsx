import { useEffect, useState } from 'react';
import { IContractData } from '../../../../backend/src/@types/Contract';
import api from '../../services/api';

export default function Validate2() {
	const [contracts, setContracts] = useState<IContractData[]>([]);

	useEffect(() => {
		let data: any = {};

		const user = JSON.parse(window.sessionStorage.getItem('user') || '{}');

		if (window.sessionStorage.getItem('user')) {
			console.log('user:', user);
			data.authUser = user;
		} else {
			console.log('No user');
		}

		api
			.get('/contracts', {
				params: {
					authUser: user,
				},
			})
			.then(response => {
				setContracts(response.data);
			});
	});

	return (
		<>
			<h1>Howdy</h1>
			{contracts.forEach(contract => {
				return <div>{JSON.stringify(contract, null, 4)}</div>;
			})}
		</>
	);
}
