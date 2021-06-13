import React from 'react';
import { Form } from '@unform/web';
import { Input, PasswordInput } from '../../components/Input';
import api from '../../services/api';

interface IData {
	email: string;
	password: string;
}

export const LoginForm: React.FC = () => {
	return (
		<Form onSubmit={handleSubmit}>
			<Input name={'email'} type={'email'} placeholder={'Email'} />
			<PasswordInput />

			<div>
				<button type={'submit'}>Click me</button>
				<a href="/forgot">Esqueci minha senha</a>
			</div>
			<div>
				<a href="/register">Não tenho conta</a>
			</div>
		</Form>
	);
};

async function handleSubmit(data: IData) {
	const response = await api.post('auth/login', data);
	console.log('Response:', response.data);
}
