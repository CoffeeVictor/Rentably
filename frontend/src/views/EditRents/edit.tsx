import { Form } from '@unform/web';
import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import api from '../../services/api';
import styles from './style.module.scss';

const FormItem: React.FC = ({ children }) => {
	return <div className={styles.formItem}>{children}</div>;
};

export const EditRent: React.FC = () => {
	return (
		<div>
			<Form onSubmit={handleSubmit} className={styles.conteiner}>
				<div className={styles.form}>
					<FormItem>
						<h1>Property data</h1>
					</FormItem>
					<FormItem>
						<Input name="street" type="text" placeholder="Street" />
					</FormItem>
					<FormItem>
						<Input name="number" type="text" placeholder="Number" />
					</FormItem>
					<FormItem>
						<Input name="state" type="text" placeholder="State" />
					</FormItem>
					<FormItem>
						<Input name="city" type="text" placeholder="City" />
					</FormItem>
					<FormItem>
						<Input name="zipCode" type="text" placeholder="Zip Code" />
					</FormItem>
					<FormItem>
						<Input
							name="propertyTaxNumber"
							type="text"
							placeholder="Property Tax Number"
						/>
					</FormItem>
					<FormItem>
						<Input
							name="waterBillContract"
							type="text"
							placeholder="Water Bill Contract"
						/>
					</FormItem>
					<FormItem>
						<Input
							name="eletricBillContract"
							type="text"
							placeholder="Eletric Bill Contract"
						/>
					</FormItem>
				</div>
				<div className={styles.form}>
					<FormItem>
						<h1>Rent contract</h1>
					</FormItem>
					<FormItem>
						<Input name="rent" type="text" placeholder="Rent" />
					</FormItem>
					<FormItem>
						<Input name="payday" type="text" placeholder="Payday" />
					</FormItem>
				</div>
				<div className={styles.form}>
					<FormItem>
						<h1>Tenant data</h1>
					</FormItem>
					<FormItem>
						<Input name="name" type="text" placeholder="Name" />
					</FormItem>
					<FormItem>
						<Input name="email" type="email" placeholder="Email" />
					</FormItem>
					<FormItem>
						<Button type={'button'}>Save</Button>
					</FormItem>
					<FormItem>
						<Button type={'button'}>Cancel</Button>
					</FormItem>
				</div>
			</Form>
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
