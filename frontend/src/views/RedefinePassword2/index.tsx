import Logo from '../../components/Images/logo.png';
import { RedefinePassword2Form } from './RedefinePassword2Form';
import styles from './styles.module.scss';

export default function RedefinePassword2() {
	return (
		<div className={styles.loginPage}>
			<div className={styles.contentContainer}>
				<div className={styles.logoContainer}>
					<img src={Logo}></img>
					<h1>Rentably</h1>
					<p>Seja bem-vindo ao seu gerenciador de imóveis e aluguéis</p>
				</div>
				<div className={styles.formContainer}>
					<RedefinePassword2Form />
				</div>
			</div>
		</div>
	);
}
