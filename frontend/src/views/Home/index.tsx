import {
	faChartLine,
	faHome,
	faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import Logo from '../../components/Images/logo-sem-fundo.png';
import { getUser } from '../../services/api';
import { ListRents } from './ListRents';
import styles from './style.module.scss';

export default function List() {
	const history = useHistory();

	if (!getUser()) {
		history.push('/login');
	}

	return (
		<div>
			<div className={styles.menu}>
				<img src={Logo} alt="Rentably logo: uma mão segurando uma casa"></img>
				<a href="/">
					<FontAwesomeIcon icon={faHome} size="2x" />
				</a>
				<a href="/graphs">
					<FontAwesomeIcon icon={faChartLine} size="2x" />
				</a>
				<a
					style={{ padding: '160px', transform: 'rotate(180deg)' }}
					href="/logout"
				>
					<FontAwesomeIcon icon={faSignOutAlt} size="2x" />
				</a>
			</div>
			<div className={styles.page}>
				<ListRents />
			</div>
		</div>
	);
}
