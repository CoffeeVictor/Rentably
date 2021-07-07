import React from 'react';
import { Form } from '@unform/web';
import { Input, PasswordInput } from '../../components/Input';
import { Button } from '../../components/Button';
import api from '../../services/api';
import styles from './styles.module.scss';
import { useHistory } from 'react-router-dom';

interface IData {
	email: string;
	password: string;
}

const FormItem: React.FC = ({ children }) => {
	return <div className={styles.formItem}>{children}</div>;
};

export const LoginForm: React.FC = () => {
	const history = useHistory();

	const handleSubmit = async (data: IData) => {
		const response = await api.post('auth/login', data);

		const { user } = response.data;

		window.sessionStorage.setItem('user', user);

		history.push('/view');
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
