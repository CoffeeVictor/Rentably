import React from 'react';
import styles from './style.module.scss';

export const Charts: React.FC = () => {
	return (
		<div className={styles.conteiner}>
			<div className={styles.pie}>
				<h1>Finalidades</h1>
			</div>
			<div className={styles.bar}>
				<h1>Inadimplências</h1>
			</div>

			<div className={styles.historico}>
				<h1>Pagamentos</h1>
				<div className={styles.lista}></div>
			</div>
		</div>
	);
};
