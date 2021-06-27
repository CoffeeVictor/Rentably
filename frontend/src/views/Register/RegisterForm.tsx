import React from 'react';
import { Form } from '@unform/web';
import { Input, PasswordInput } from '../../components/Input';
import { Button } from '../../components/Button';
import api from '../../services/api';
import styles from './styles.module.scss';


interface IData {
	email: string;
	password: string;
}

const FormItem: React.FC = ({ children }) => {
	return <div className={styles.formItem}>{children}</div>;
};

export const RegisterForm: React.FC = () => {
	return (
		<Form onSubmit={handleSubmit}>
			<FormItem>
				<h1>Create acount</h1>
			</FormItem>
			<FormItem>
				<Input name={'name'} type={'text'} placeholder={'Type your name'} />
			</FormItem>
			<FormItem>
				<Input name={'cpf'} type={'text'} placeholder={'Type your cpf'} />
			</FormItem>
			<FormItem>
				<PasswordInput />
			</FormItem>
			<FormItem>
				<PasswordInput />
			</FormItem>
			<FormItem>
				<Button type={'submit'} >Registrate</Button>
				<a href="/login">I already have an account</a>
			</FormItem>
	</Form>	
	);
};

async function handleSubmit(data: IData) {
	window.location.href="./validate"
	const response = await api.post('auth/login', data);
	console.log('Response:', response.data);
}
