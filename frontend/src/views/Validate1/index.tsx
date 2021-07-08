import styles from './styles.module.scss';
import { Validate1Form } from './Validate1Form';
import Logo from "../../components/Images/logo.png";


export default function Validate1() {
	return (
		<div className={styles.loginPage}>
			<div className={styles.contentContainer}>
				<div className={styles.logoContainer}>	
				<img src={Logo} ></img>
				<h1>Rentably</h1>
				<p>Seja bem-vindo ao seu gerenciador de imóveis e aluguéis</p>
				</div>
				<div className={styles.formContainer}>
					<Validate1Form />
				</div>
			</div>
		</div>
	);
}
