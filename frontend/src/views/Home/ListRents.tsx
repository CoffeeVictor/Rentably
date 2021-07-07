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
            setRents(data.map((entry: IContractData) => ({
                rent: entry.rent,
                payday: entry.payday,
                tenantName: entry.tenant.name,
                tenantEmail: entry.tenant.email,
                property_waterBillContract: entry.property.waterBillContract,
                property_electricBillContract: entry.property.electricBillContract,
                property_propertyTaxNumber: entry.property.propertyTaxNumber,
                property_addressCity: entry.property.address.city,
                property_addressCountry: entry.property.address.country,
                property_addressState: entry.property.address.state,
                property_addressStreet: entry.property.address.street,
                property_addressNumber: entry.property.address.number,
                property_addressZipCode: entry.property.address.zipCode

            })))

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
                            <a href="/view" onClick={() => onClickContract(rent)}>   
                                <label> <FontAwesomeIcon icon={faMapMarkerAlt} size="2x"/> {rent.property_addressCity}</label>
                                <label> <FontAwesomeIcon icon={faUser} size="2x"/> {rent.tenantName} </label>
                            </a>
                        </li>)
                    }
                </ul>
            </div>
        </div>
        //it fucking works
	);
};

function onClickContract(rent: IContractData){
    const rentInUse = sessionStorage.setItem('rentInUse', JSON.stringify(rent))
}
async function handleSubmit(data: IData) {
	const response = await api.post('auth/', data)
	console.log('Response:', response.data)
}