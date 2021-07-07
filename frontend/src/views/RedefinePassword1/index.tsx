import Logo from '../../components/Images/logo.png';
import { RedefinePassword1Form } from './RedefinePassword1Form';
import styles from './styles.module.scss';

export default function RedefinePassword1() {
	return (
		<div className={styles.loginPage}>
			<div className={styles.contentContainer}>
				<div className={styles.logoContainer}>
					<img src={Logo}></img>
					<h1>Rentably</h1>
					<p>Seja bem-vindo ao seu gerenciador de imóveis e aluguéis</p>
				</div>
				<div className={styles.formContainer}>
					<RedefinePassword1Form />
				</div>
			</div>
		</div>
	);
}
