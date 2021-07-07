import React from 'react';
import styles from './style.module.scss';
import { Input } from '../../components/Input';
import api from '../../services/api';
import { Form } from '@unform/web';
import { Button } from '../../components/Button';

interface IData {
	street: string;
	city: string;
	state: string;
	number: string;
	zipCode: string;
	propertyTaxNumber: string;
	waterBillContract: string;
	eletricBillContract: string;
	rent: string;
	payday: string;
	name: string;
	email: string;
}

const FormItem: React.FC = ({ children }) => {
	return <div className={styles.formItem}>{children}</div>;
};

export const ViewRent: React.FC = () => {
	return (
		<div>
			<Form onSubmit={handleSubmit} className={styles.conteiner}>
				<div className={styles.form}>
					<FormItem>
						<h1>Property data</h1>
					</FormItem>
					<FormItem>
						<Input
							name="street"
							type="text"
							placeholder="Street"
							disabled={true}
						/>
					</FormItem>
					<FormItem>
						<Input
							name="number"
							type="text"
							placeholder="Number"
							disabled={true}
						/>
					</FormItem>
					<FormItem>
						<Input
							name="state"
							type="text"
							placeholder="State"
							disabled={true}
						/>
					</FormItem>
					<FormItem>
						<Input name="city" type="text" placeholder="City" disabled={true} />
					</FormItem>
					<FormItem>
						<Input
							name="zipCode"
							type="text"
							placeholder="Zip Code"
							disabled={true}
						/>
					</FormItem>
					<FormItem>
						<Input
							name="propertyTaxNumber"
							type="text"
							placeholder="Property Tax Number"
							disabled={true}
						/>
					</FormItem>
					<FormItem>
						<Input
							name="waterBillContract"
							type="text"
							placeholder="Water Bill Contract"
							disabled={true}
						/>
					</FormItem>
					<FormItem>
						<Input
							name="eletricBillContract"
							type="text"
							placeholder="Eletric Bill Contract"
							disabled={true}
						/>
					</FormItem>
				</div>
				<div className={styles.form}>
					<FormItem>
						<h1>Rent contract</h1>
					</FormItem>
					<FormItem>
						<Input name="rent" type="text" placeholder="Rent" disabled={true} />
					</FormItem>
					<FormItem>
						<Input
							name="payday"
							type="text"
							placeholder="Payday"
							disabled={true}
						/>
					</FormItem>
				</div>
				<div className={styles.form}>
					<FormItem>
						<h1>Tenant data</h1>
					</FormItem>
					<FormItem>
						<Input name="name" type="text" placeholder="Name" disabled={true} />
					</FormItem>
					<FormItem>
						<Input
							name="email"
							type="email"
							placeholder="Email"
							disabled={true}
						/>
					</FormItem>
					<FormItem>
						<Button
							type={'button'}
							onClick={() => {
								window.location.href = '/edit';
							}}
						>
							Edit
						</Button>
					</FormItem>
					<FormItem>
						<Button type={'button'}>Delete</Button>
					</FormItem>
				</div>
			</Form>
		</div>
	);
};

async function handleSubmit(data: IData) {
	const response = await api.post('auth/', data);
	console.log('Response:', response.data);
}
