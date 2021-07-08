import styles from './styles.module.scss';
import { RegisterForm } from './RegisterForm';
import Logo from "../../components/Images/logo.png";
import { Button } from '../../components/Button';


export default function Register() {
	return (
		<div className={styles.loginPage}>
			<div className={styles.contentContainer}>
				<div className={styles.logoContainer}>	
				<img src={Logo}></img>
				<h1>Rentably</h1>
					<p>Seja bem-vindo ao seu gerenciador de imóveis e aluguéis</p>
				</div>
				<div className={styles.formContainer}>
					<RegisterForm />
				</div>
			</div>
		</div>
	);
}