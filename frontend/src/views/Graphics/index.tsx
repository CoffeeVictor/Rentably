import styles from './style.module.scss';
import { Charts } from './Charts';
import Logo from "../../components/Images/logo-sem-fundo.png";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IContractData } from '../../../../backend/src/@types/Contract';
import api from '../../services/api';
import React, { useEffect, useState } from 'react';

export default function Graphs() {

	const [dataStates, setDataStates] = useState<any[]>([]);
	const [dataStateRents, setDataStateRents] = useState<any[]>([]);
	const [dataPieChart, setDataPieChart] = useState<any[]>([]);
	const [dataRentsPerProperty, setDataRentsPerProperty] = useState<any[]>([]);

	useEffect(() => {
		const loadData = async () => {
			const dataSt = await getContractStates()
			const dataStRents = await getContractRentsPerState()
			const dataPie = await getRents3GreatestAndOthers()
			const dataRenPerProp = await getRentsPerProperty()
			setDataStates(dataSt)
			setDataStateRents(dataStRents)
			setDataPieChart(dataPie)
			setDataRentsPerProperty(dataRenPerProp)
		}



		loadData()
	}, [])
	return (
		<div>
			<div className={styles.menu}>
				<img src={Logo} alt="Rentably logo: uma mão segurando uma casa"></img>
				<a href="/home"><FontAwesomeIcon icon={faHome} size="2x" /></a>
				<a href="/graphs"><FontAwesomeIcon icon={faChartLine} size="2x" /></a>
				<a style={{ padding: "160px", transform: "rotate(180deg)" }} href="/login"><FontAwesomeIcon icon={faSignOutAlt} size="2x" /></a>
			</div>
			<div className={styles.page}>
				<Charts labelSt={dataStates} valuesSt={dataStateRents} valuesPie={dataPieChart} valuesAndLabelsProp={dataRentsPerProperty} />
			</div>
		</div>
	);
}

// Retorna todos os estados que tem propriedades
// []String
// Gráfico: Aluguel total por estado
async function getContractStates() {
	const { data } = await api.get('/contracts')
	const labels: string[] = data.map((element: IContractData) => {
		return element.property.address.state
	})
	const uniqueLabels = labels.filter(function (item, pos) {
		return labels.indexOf(item) == pos;
	})
	console.log(uniqueLabels)
	return uniqueLabels
}

// Retorna o aluguel total de todas as propriedades de cada estado
// []number
// Gráfico: Aluguel total por estado
async function getContractRentsPerState() {
	const { data } = await api.get('/contracts')
	const labels: string[] = data.map((element: IContractData) => {
		return element.property.address.state
	})
	const uniqueLabels = labels.filter(function (item, pos) {
		return labels.indexOf(item) == pos;
	})
	const rents: [] = data.map((element: IContractData) => {
		return { "rent": element.rent, "state": element.property.address.state }
	})
	const rentsPerState: number[] = uniqueLabels.map(elementLabel => {
		var rentTotal = 0
		rents.forEach(elementRent => {
			if (elementRent["state"] == elementLabel) {
				rentTotal += elementRent["rent"]
			}
		})
		return rentTotal
	})
	return rentsPerState
}

// Retorna uma lista de números onde os 3 primeiros valores são os maiores individualmente
// O 4º valor é a soma dos menores(outros)
// []number
// Gráfico: Pizza
async function getRents3GreatestAndOthers() {
	const { data } = await api.get('/contracts')
	const rents: number[] = data.map((element: IContractData) => {
		return element.rent
	})
	rents.sort((a, b) => b - a)
	const lowerValues: number[] = []
	while (rents.length > 3) {
		var number = rents.pop()
		if (number)
			lowerValues.push(number)
	}
	rents.push(lowerValues.reduce((a, b) => a + b, 0))
	return rents
}

// Retorna lista de dicts, onde "rent" é o valor do aluguel e "zipCode" é o CEP do local que corresponde ao aluguel cobrado
// [{"rent": number, "zipCode": String}]
// Gráfico: Aluguel por propriedade
async function getRentsPerProperty() {
	const { data } = await api.get('/contracts')
	const valuesAndLabels: [] = data.map((element: IContractData) => {
		return { "rent": element.rent, "zipCode": element.property.address.zipCode }
	})
	valuesAndLabels.forEach(element => {
		console.log(element["rent"])
		console.log(element["zipCode"])
	})
	return valuesAndLabels
}