import React from 'react';
import { Form } from '@unform/web';
import { Input, PasswordInput } from '../../components/Input';
import { Button } from '../../components/Button';
import api from '../../services/api';
import styles from './styles.module.scss';
import goBack from "../../components/Images/goBackIcon.png";


interface IData {
	email: string;
	password: string;
}

const FormItem: React.FC = ({ children }) => {
	return <div className={styles.formItem}>{children}</div>;
};

export const Validate1Form: React.FC = () => {
	return (
		<Form onSubmit={handleSubmit}>
			<a className={styles.goBackButton} href={"./register"}>
				<img src={goBack} ></img>
			</a>
			<FormItem>
				<h2>Type your email</h2>
			</FormItem>
			<FormItem>
				<Input name={'email'} type={'email'} placeholder={'Email'} />
			</FormItem>
			<FormItem>
				<Button type={'submit'}>Send confirmation</Button>
			</FormItem>
	</Form>	
	);
};

async function handleSubmit(data: IData) {
	window.location.href = "./validate2"
	const response = await api.post('auth/login', data);
	console.log('Response:', response.data);
}
