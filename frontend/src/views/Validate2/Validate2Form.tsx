import React from 'react';
import { Form } from '@unform/web';
import { Input, PasswordInput } from '../../components/Input';
import { Button } from '../../components/Button';
import api from '../../services/api';
import styles from './styles.module.scss';
import goBack from "../../components/Images/goBackIcon.png";


interface IData {
	code: string;
}

const FormItem: React.FC = ({ children }) => {
	return <div className={styles.formItem}>{children}</div>;
};

export const Validate2Form: React.FC = () => {
	return (
		<Form onSubmit={handleSubmit}>
			<a className={styles.goBackButton} href={"./validate"}>
				<img src={goBack} ></img>
			</a>
			<FormItem>
				<h2>Verify your email</h2>
			</FormItem>
			<FormItem>
				<Input name={'code'} type={'text'} placeholder={'Type the code sended to you'} />
			</FormItem>
			<FormItem>
				<Button type={'submit'}>Validate email</Button>
			</FormItem>
	</Form>	
	);
};

async function handleSubmit(data: IData) {
	window.location.href = "./login"
	const response = await api.post('auth/login', data);
	console.log('Response:', response.data);
}
