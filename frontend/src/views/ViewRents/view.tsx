import { parse } from '@fortawesome/fontawesome-svg-core';
import { Form } from '@unform/web';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import api, { getUser } from '../../services/api';
import styles from './style.module.scss';

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
	const location: { state: { position: number } } = useLocation();

	const [data, setData] = useState(null);

	const formRef = useRef(null);

	useEffect(() => {
		const loadData = async () => {
			const response = await api.get('/contracts', {
				headers: {
					authUser: getUser().id,
				},
			});

			const unparsedData = response.data[location.state.position];

			const parsedData = {
				rent: unparsedData.rent,
				payday: unparsedData.payday,
				tenant: {
					email: unparsedData.tenant.email,
					name: unparsedData.tenant.name,
				},
				property: {
					propertyTaxNumber: unparsedData.property.propertyTaxNumber,
					waterBillContract: unparsedData.property.waterBillContract,
					eletricBillContract: unparsedData.property.eletricBillContract,
					address: {
						street: unparsedData.property.address.street,
						number: unparsedData.property.address.number,
						country: unparsedData.property.address.country,
						state: unparsedData.property.address.state,
						city: unparsedData.property.address.city,
						zipCode: unparsedData.property.address.zipCode,
					},
				},
			};
			setData(unparsedData);
			formRef.current.setData(parsedData);
		};
		loadData();
	}, []);

	console.log('Data is:', data);

	return (
		<div>
			<Form onSubmit={handleSubmit} className={styles.conteiner} ref={formRef}>
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
					{/* <FormItem>
						<Button type={'button'} onClick={() => {}}>
							Edit
						</Button>
					</FormItem>
					<FormItem>
						<Button type={'button'}>Delete</Button>
					</FormItem> */}
				</div>
			</Form>
		</div>
	);
};

async function handleSubmit(data: IData) {
	const response = await api.post('auth/', data);
	console.log('Response:', response.data);
}
