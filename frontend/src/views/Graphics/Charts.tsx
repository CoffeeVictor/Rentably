import React from 'react';
import styles from './style.module.scss';
import { Bar, Pie } from 'react-chartjs-2';

export function Charts(props: any) {
	const labelBarStates: string[] = props.labelSt;
	const valuesBarStates: number[] = props.valuesSt;
	const valuesPieChart: number[] = props.valuesPie;
	const dataBarProperty: [] = props.valuesAndLabelsProp;

	const datapie = {
		//setar as propriedades em labels
		labels: [
			'1º mais lucrativa',
			'2º mais lucrativa',
			'3º mais lucrativa',
			'Outras',
		],
		datasets: [
			{
				label: 'Lucro X Propriedade',
				//setar a porcentagem de cada uma em data
				data: valuesPieChart,
				backgroundColor: ['#00B85F', '#1FFF93', '#85FFC4', '#EBFFF5'],
				borderColor: ['#FFFFFF'],
				borderWidth: 2,
			},
		],
	};

	const databar1 = {
		//setar os estados em labels
		labels: labelBarStates,
		datasets: [
			{
				label: 'Lucro X Estado',
				//setar lucro mensal de cada estado em data
				data: valuesBarStates,
				backgroundColor: ['#00FF85'],
				borderColor: ['#FFFFFF'],
				borderWidth: 2,
			},
		],
	};
	const databar2 = {
		//setar as propriedades em labels
		labels: dataBarProperty.map(element => {
			return element['zipCode'];
		}),
		datasets: [
			{
				label: 'Lucro X Propriedade',
				//setar lucro mensal de cada uma em data
				data: dataBarProperty.map(element => {
					return element['rent'];
				}),
				backgroundColor: ['#00FF85'],
				borderColor: ['#FFFFFF'],
				borderWidth: 2,
			},
		],
	};
	return (
		<div className={styles.conteiner}>
			<div className={styles.pie}>
				<h2>Proporção de lucro por propriedade</h2>
				<Pie type="pie" data={datapie} />
			</div>
			<div className={styles.bar}>
				<h2>Lucro por estado</h2>
				<Bar type="bar" data={databar1} />
			</div>
			<div className={styles.bar}>
				<h2>Lucro por propriedade</h2>
				<Bar type="bar" data={databar2} />
			</div>
		</div>
	);
}
