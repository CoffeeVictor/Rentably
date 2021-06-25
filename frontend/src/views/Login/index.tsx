import styles from './styles.module.scss';
import { LoginForm } from './LoginForm';
import Logo from "./logo.png";


export default function Login() {
	return (
		<div className={styles.loginPage}>
			<div className={styles.contentContainer}>
				<div className={styles.logoContainer}>	
				<img src={Logo}></img>
				<h1>Rentably</h1>
				<p>Seja bem-vindo ao seu gerenciador de imóveis e aluguéis</p>
				</div>
				<div className={styles.formContainer}>
					<LoginForm />
				</div>
			</div>
		</div>
	);
}
