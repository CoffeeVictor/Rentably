import { Form } from '@unform/web';
import React from 'react';
import { Button } from '../../components/Button';
import goBack from '../../components/Images/goBackIcon.png';
import { Input } from '../../components/Input';
import styles from './styles.module.scss';

interface IData {
	email: string;
	password: string;
}

const FormItem: React.FC = ({ children }) => {
	return <div className={styles.formItem}>{children}</div>;
};

export const Validate1Form: React.FC = () => {
	return (
		<Form onSubmit={handleSubmit}>
			<a className={styles.goBackButton} href={'./register'}>
				<img src={goBack}></img>
			</a>
			<FormItem>
				<h2>Type your email</h2>
			</FormItem>
			<FormItem>
				<Input name={'email'} type={'email'} placeholder={'Email'} />
			</FormItem>
			<FormItem>
				<Button type={'submit'}>Send confirmation</Button>
			</FormItem>
		</Form>
	);
};

async function handleSubmit(data: IData) {
	window.location.href = './validate2';
}
