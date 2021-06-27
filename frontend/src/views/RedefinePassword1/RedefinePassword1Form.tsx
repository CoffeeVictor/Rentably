import React from 'react';
import { Form } from '@unform/web';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import api from '../../services/api';
import styles from './styles.module.scss';
import goBack from "../../components/Images/goBackIcon.png";


interface IData {
	email: string;
}

const FormItem: React.FC = ({ children }) => {
	return <div className={styles.formItem}>{children}</div>;
};

export const RedefinePassword1Form: React.FC = () => {
	return (
		<Form onSubmit={handleSubmit}>
			<a className={styles.goBackButton} href={"./login"}>
				<img src={goBack} ></img>
			</a>
			<FormItem>
				<h2>Forgot your Password?</h2>
			</FormItem>
			<FormItem>
				<Input name={'email'} type={'email'} placeholder={'Type your email'} />
			</FormItem>
			<FormItem>
				<Button type={'submit'}>Send</Button>
			</FormItem>
	</Form>	
	);
};

async function handleSubmit(data: IData) {
	window.location.href = "./forgot2"
	const response = await api.post('auth/login', data);
	console.log('Response:', response.data);
}
