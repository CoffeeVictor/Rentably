import React, {useEffect, useState} from 'react';
import styles from './style.module.scss';
import { faMapMarkerAlt, faUser, faFileContract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from '../../components/Input';
import api from '../../services/api';
import { Form } from '@unform/web';
import csv from "../../components/Images/icon-csv.png";
import add from "../../components/Images/icon-add-rent.png";
import {IContractData} from '../../../../backend/src/@types/Contract'

interface IData {
	search: string;
}


export const ListRents: React.FC = () => {
    // const contractsJson = await onLoad()
    // const rentsF = []
    // //const contractsJson = JSON.stringify(sessionStorage.getItem('contracts'))
    // if (contractsJson != null) {
    //     contractsJson["contract"].forEach(({contract}) =>  {
    //         rentsF.push({ address: contract['property'], name: 'Seu José' })

    //     })
    // }

    const [rents, setRents] = useState<any[]>([]);

    useEffect(() => {

        const loadData = async () => {
            const {data} = await api.get('/contracts');
            console.log('Data:', data)
            setRents(data.map((entry: IContractData) => ({address:entry.property.address.city, name:entry.tenant.name})))

        };

        loadData();

        // setRents([
        //             {
        //                 address: 'Rua da paz',
        //                 name: 'Seu José'
        //             },
        //             {
        //                 address: 'Rua da saudade',
        //                 name: 'Seu Gustavo'
        //             }, 
        //             {
        //                 address: 'Rua da horta',
        //                 name: 'Dona Maria'
        //             }
        //         ]
        //     );
    }, []);
    

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
                                <label> <FontAwesomeIcon icon={faMapMarkerAlt} size="2x"/> {rent.address}</label>
                                <label> <FontAwesomeIcon icon={faUser} size="2x"/> {rent.name} </label>
                            </a>
                        </li>)
                    }
                </ul>
            </div>
        </div>
        //it fucking works
	);
};

async function onLoad() {
    const response = await api.get('/contracts')
    console.log('Response:', response.data)
    
	/*const response2 = await fetch('http://localhost:8000/contracts', { method: 'GET' }).then((response) => response.json())
	.then((json) => {
        const contracts = sessionStorage.setItem('contracts', json)
        console.log(json)
        return json
	})*/
    return response.data
    const contracts = sessionStorage.setItem('contracts', JSON.stringify(response.data))
}
async function handleSubmit(data: IData) {
	const response = await api.post('auth/', data)
	console.log('Response:', response.data)
}