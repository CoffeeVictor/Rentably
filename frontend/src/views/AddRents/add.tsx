import { Form } from '@unform/web';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import api, { getUser } from '../../services/api';
import styles from './style.module.scss';

const FormItem: React.FC = ({ children }) => {
	return <div className={styles.formItem}>{children}</div>;
};

export const AddRent: React.FC = () => {
	const history = useHistory();
	const handleSubmit = async data => {
		console.log('Submit data:', data);
		await api.post('/contracts', data, {
			headers: {
				authUser: getUser().id,
			},
		});
		history.push('/');
	};

	return (
		<div>
			<Form onSubmit={handleSubmit} className={styles.conteiner}>
				<div className={styles.form}>
					<FormItem>
						<h1>Property data</h1>
					</FormItem>
					<FormItem>
						<Input
							name="property.address.street"
							type="text"
							placeholder="Street"
						/>
					</FormItem>
					<FormItem>
						<Input
							name="property.address.number"
							type="text"
							placeholder="Number"
						/>
					</FormItem>
					<FormItem>
						<Input
							name="property.address.country"
							type="text"
							placeholder="Country"
						/>
					</FormItem>
					<FormItem>
						<Input
							name="property.address.state"
							type="text"
							placeholder="State"
						/>
					</FormItem>
					<FormItem>
						<Input
							name="property.address.city"
							type="text"
							placeholder="City"
						/>
					</FormItem>
					<FormItem>
						<Input
							name="property.address.zipCode"
							type="text"
							placeholder="Zip Code"
						/>
					</FormItem>
					<FormItem>
						<Input
							name="property.propertyTaxNumber"
							type="text"
							placeholder="Property Tax Number"
						/>
					</FormItem>
					<FormItem>
						<Input
							name="property.waterBillContract"
							type="text"
							placeholder="Water Bill Contract"
						/>
					</FormItem>
					<FormItem>
						<Input
							name="property.eletricBillContract"
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
						<Input name="tenant.name" type="text" placeholder="Name" />
					</FormItem>
					<FormItem>
						<Input name="tenant.email" type="email" placeholder="Email" />
					</FormItem>
					<FormItem>
						<Button type={'submit'}>Save new contract</Button>
					</FormItem>
				</div>
			</Form>
		</div>
	);
};
