import React from 'react';
import styles from './style.module.scss';
import { Bar, Pie } from 'react-chartjs-2';

export const Charts: React.FC = () => {
        const datapie = {
                //setar as propriedades em labels
                labels: ['Red', 'Blue', 'Yellow', 'aa'],
                datasets: [
                  {
                    label: 'Lucro X Propriedade',
                    //setar a porcentagem de cada uma em data
                    data: [12, 19, 3, 2],
                    backgroundColor: [
                        '#00B85F',
                        '#1FFF93',
                        '#85FFC4',
                        '#EBFFF5',
                    ],
                    borderColor: [
                        '#FFFFFF',
                      ],
                    borderWidth: 2,
                  },
        ],
        };
              
        const databar1 = {
                //setar os estados em labels
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                  {
                    label: 'Lucro X Estado',
                    //setar lucro mensal de cada estado em data
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        '#00FF85',
                    ],
                    borderColor: [
                        '#FFFFFF',
                    ],
                    borderWidth: 2,
                  },
        ],
        };
        const databar2 = {
        //setar as propriedades em labels
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
                {
                label: 'Lucro X Propriedade',
                //setar lucro mensal de cada uma em data
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                '#00FF85',
                ],
                borderColor: [
                '#FFFFFF',
                ],
                borderWidth: 2,}
        ],
        };
   	return (
        <div className={styles.conteiner}>
                <div className={styles.pie}>
                        <h2>Proporção de lucro por propriedade</h2>
                        <Pie 
                        type="pie"
                        data={datapie}
                        />
                </div>
                <div className={styles.bar}>
                        <h2>Lucro por estado</h2>
                        <Bar
                        type="bar"
                        data={databar1}
                        />
                </div>
                <div className={styles.bar}>
                        <h2>Lucro por propriedade</h2>
                        <Bar
                        type="bar"
                        data={databar2}
                        />
                </div>
        </div>
	);
};

