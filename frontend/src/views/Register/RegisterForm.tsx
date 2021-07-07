import React from 'react';
import { Form } from '@unform/web';
import { Input, PasswordInput } from '../../components/Input';
import { Button } from '../../components/Button';
import styles from './styles.module.scss';
import api from '../../services/api';


interface IData {
	email: string;
	name: string;
	password: string;
	cpf: string;
	
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
				<Input name={'email'} type={'email'} placeholder={'Type your email'} />
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
	
	const response = await api.post('/users', data)

	/*
	const requestData = {
		method: 'POST',
		body: JSON.stringify(data)
	}
	try {
		const response = await fetch('http://localhost:8000/users', requestData).then((response) => response.json())
			.then((json) => {
				console.log(json)
			})
		const email = sessionStorage.getItem('userEmail')
		console.log(email)
		window.location.href = "./login"
	} catch {
		console.log("deu ruim")
	}*/
		
}

async function testePrint() {
	const email = sessionStorage.getItem('userEmail')
	console.log(email)
}
