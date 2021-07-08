import styles from './style.module.scss';
import { ListRents } from './ListRents';
import Logo from "../../components/Images/logo-sem-fundo.png";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function List() {
	return (
		<div>
			<div className={styles.menu}>
				<img src={Logo} alt="Rentably logo: uma mão segurando uma casa"></img>
				<a href="/home"><FontAwesomeIcon icon={faHome} size="2x"/></a>
				<a href="/graphs"><FontAwesomeIcon icon={faChartLine} size="2x"/></a>
				<a style={{padding:"160px", transform: "rotate(180deg)"}} href="/login"><FontAwesomeIcon icon={faSignOutAlt} size="2x"/></a>
			</div>
			<div className={styles.page}>
				<ListRents />
			</div>
		</div>
	);
}
