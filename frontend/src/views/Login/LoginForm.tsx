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

export const LoginForm: React.FC = () => {
	return (
		<Form onSubmit={handleSubmit}>
			<FormItem>
				<h1>Login</h1>
			</FormItem>
			<FormItem>
				<Input name={'email'} type={'email'} placeholder={'Email'} />
			</FormItem>
			<FormItem>
				<PasswordInput />
			</FormItem>
			<FormItem>
				<Button type={'submit'}>Log in</Button>
				<a href="/forgot">Forgot Password?</a>
			</FormItem>
			<FormItem>
				<a href="/register">Create new account</a>
			</FormItem>
	</Form>	
	);
};

async function handleSubmit(data: IData) {
	const response = await api.post('auth/login', data);
	console.log('Response:', response.data);
}
