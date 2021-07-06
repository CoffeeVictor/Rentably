import React from 'react';
import styles from './style.module.scss';
import { faMapMarkerAlt, faUser, faFileContract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from '../../components/Input';
import api from '../../services/api';
import { Form } from '@unform/web';
import csv from "../../components/Images/icon-csv.png";
import add from "../../components/Images/icon-add-rent.png";

interface IData {
	search: string;
}

export const ListRents: React.FC = () => {
    const rents = [ {endereco: 'Rua da paz', nome: 'Seu José'}, 
                    {endereco: 'Rua da saudade', nome: 'Seu Gustavo'}, 
                    {endereco: 'Rua da horta', nome: 'Dona Maria'}];
	return (
        <div>
            <div className={styles.head}>
                <Form onSubmit={handleSubmit}>
                    <Input name={'search'} type={'text'} placeholder={'Search rents...'}/>
                </Form>
                <div className={styles.icons}>
                    <a href="/add"><img src={add} className={styles.add}></img></a>
                    <a href=""><img src={csv} className={styles.csv}></img></a>
                </div>
            </div>
            <div className={styles.list}>
                <ul>
                    {
                        rents.map(rent =>
                        <li>
                            <a href="/view">
                                <label> <FontAwesomeIcon icon={faMapMarkerAlt} size="2x"/> {rent.endereco}</label>
                                <label> <FontAwesomeIcon icon={faUser} size="2x"/> {rent.nome} </label>
                            </a>
                        </li>)
                    }
                </ul>
            </div>
        </div>

	);
};

async function handleSubmit(data: IData) {
	const response = await api.post('auth/', data);
	console.log('Response:', response.data);
}