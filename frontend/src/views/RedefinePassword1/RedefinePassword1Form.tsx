import React from 'react';
import { Form } from '@unform/web';
import { Input, PasswordInput} from '../../components/Input';
import { Button } from '../../components/Button';
import styles from './styles.module.scss';
import goBack from "../../components/Images/goBackIcon.png";


interface IData {
	email: string;
	cpf: string;
	password: string;
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
				<Input name={'cpf'} type={'email'} placeholder={'Type your cpf'} />
			</FormItem>
			<FormItem>
					<PasswordInput />
			</FormItem>
			<FormItem>
				<Button type={'submit'}>Change Password</Button>
			</FormItem>
	</Form>	
	);
};

async function handleSubmit(data: IData) {
	window.location.href = "./login"
}
