import { Form } from '@unform/web';
import React from 'react';
import { Button } from '../../components/Button';
import goBack from '../../components/Images/goBackIcon.png';
import { PasswordInput } from '../../components/Input';
import api from '../../services/api';
import styles from './styles.module.scss';

interface IData {
	password: string;
}

const FormItem: React.FC = ({ children }) => {
	return <div className={styles.formItem}>{children}</div>;
};

export const RedefinePassword2Form: React.FC = () => {
	return (
		<Form onSubmit={handleSubmit}>
			<a className={styles.goBackButton} href={'./forgot'}>
				<img src={goBack}></img>
			</a>
			<FormItem>
				<h2>Create new password</h2>
			</FormItem>
			<FormItem>
				<PasswordInput />
			</FormItem>
			<FormItem>
				<PasswordInput />
			</FormItem>
			<FormItem>
				<Button type={'submit'}>Confirm</Button>
			</FormItem>
		</Form>
	);
};

async function handleSubmit(data: IData) {
	window.location.href = './login';
	const response = await api.post('auth/login', data);
	console.log('Response:', response.data);
}
