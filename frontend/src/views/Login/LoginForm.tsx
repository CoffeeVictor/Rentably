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
				<Input name={'email'} type={'email'} placeholder={'Email'} />
			</FormItem>
			<FormItem>
				<PasswordInput />
			</FormItem>

			<FormItem>
				<Button type={'submit'}>Login</Button>
				<a href="/forgot">Esqueci minha senha</a>
			</FormItem>
			<FormItem>
				<a href="/register">Não tenho conta</a>
			</FormItem>
		</Form>
	);
};

async function handleSubmit(data: IData) {
	const response = await api.post('auth/login', data);
	console.log('Response:', response.data);
}
