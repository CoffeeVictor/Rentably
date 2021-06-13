import styles from './styles.module.scss';
import { LoginForm } from './LoginForm';

export default function Login() {
	return (
		<div className={styles.loginPage}>
			<div className={styles.contentContainer}>
				<div className={styles.logoContainer}>logo</div>
				<div className={styles.formContainer}>
					<LoginForm />
				</div>
			</div>
		</div>
	);
}
