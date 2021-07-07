import { Form } from '@unform/web';
import React from 'react';
import { Button } from '../../components/Button';
import goBack from '../../components/Images/goBackIcon.png';
import { Input } from '../../components/Input';
import styles from './styles.module.scss';

interface IData {
	code: string;
}

const FormItem: React.FC = ({ children }) => {
	return <div className={styles.formItem}>{children}</div>;
};

export const Validate2Form: React.FC = () => {
	return (
		<Form onSubmit={handleSubmit}>
			<a className={styles.goBackButton} href={'./validate'}>
				<img src={goBack}></img>
			</a>
			<FormItem>
				<h2>Verify your email</h2>
			</FormItem>
			<FormItem>
				<Input
					name={'code'}
					type={'text'}
					placeholder={'Type the code sended to you'}
				/>
			</FormItem>
			<FormItem>
				<Button type={'submit'}>Validate email</Button>
			</FormItem>
		</Form>
	);
};

async function handleSubmit(data: IData) {
	window.location.href = './login';
}
