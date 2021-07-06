import React from 'react';
import { Form } from '@unform/web';
import { Input, PasswordInput } from '../../components/Input';
import { Button } from '../../components/Button';
import api from '../../services/api';
import styles from './styles.module.scss';
//import { routes } from '../../../../backend/src/routes'


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
				<a href="/forgot">Forgot your Password?</a>
			</FormItem>
			<FormItem>
				<a href="/register">Create new account</a>
			</FormItem>
	</Form>	
	);
};

async function handleSubmit(data: IData) {
	console.log(data);
	//const teste = await api.get('/')
	const response = await api.post('auth/login', data)
	console.log(response);
	const teste2 = await fetch('http://localhost:8000/', {method: 'GET'}).then((response) => response.json())
	.then((json) => {
			console.log(json)
	})
	//console.log('Response:', teste.json());
	const requestData = {
		method: 'POST',
		body: JSON.stringify(data)
	}
	const response2 = await fetch('http://localhost:8000/auth/login', requestData).then((response) => response.json())
	.then((json) => {
			console.log(json)
	})
	const email = sessionStorage.setItem('userEmail', data['email'])
	console.log(email)
	//console.log('Response:', response.json());
	//const response = await api.post('auth/login', data);
	//const response = await api.post('auth/login', data);
	//console.log('Response:', response.data);
}
