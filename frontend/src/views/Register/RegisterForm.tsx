import { Form } from '@unform/web';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input, PasswordInput } from '../../components/Input';
import api from '../../services/api';
import styles from './styles.module.scss';

interface IData {
	name: string;
	email: string;
	password: string;
}

const FormItem: React.FC = ({ children }) => {
	return <div className={styles.formItem}>{children}</div>;
};

export const RegisterForm: React.FC = () => {
	const history = useHistory();

	const handleSubmit = async (data: IData) => {
		console.log('data:', data);

		api.post('/users', data);

		history.push('/login');
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormItem>
				<h1>Create acount</h1>
			</FormItem>
			<FormItem>
				<Input name={'name'} type={'text'} placeholder={'Type your name'} />
			</FormItem>
			<FormItem>
				<Input name={'email'} type={'email'} placeholder={'Type your email'} />
			</FormItem>
			<FormItem>
				<Input name={'cpf'} type={'text'} placeholder={'Type your cpf'} />
			</FormItem>
			<FormItem>
				<PasswordInput />
			</FormItem>
			<FormItem>
				<Button type={'submit'}>Registrate</Button>
				<a href="/login">I already have an account</a>
			</FormItem>
		</Form>
	);
};
