import { Form } from '@unform/web';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input, PasswordInput } from '../../components/Input';
import api from '../../services/api';
import styles from './styles.module.scss';

const FormItem: React.FC = ({ children }) => {
	return <div className={styles.formItem}>{children}</div>;
};

export const LoginForm: React.FC = () => {
	const history = useHistory();

	const [failedLogin, setFailedLogin] = useState(false);

	const handleSubmit = async (data: any) => {
		try {
			const response = await api.post('auth/login', data);

			const { user } = response.data;

			window.localStorage.setItem('authUser', JSON.stringify(user));

			history.push('/');
		} catch (error) {
			if (error.response && error.response.status === 401) {
				setFailedLogin(true);
			}
		}
	};

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
			{failedLogin && (
				<span style={{ color: '#FF2222' }}>Wrong credentials</span>
			)}
			<FormItem>
				<Button type={'submit'}>Log in</Button>
			</FormItem>
			<FormItem>
				<a href="/register">Create new account</a>
			</FormItem>
		</Form>
	);
};
