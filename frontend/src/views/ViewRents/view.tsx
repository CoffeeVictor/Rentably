import React from 'react';
import styles from './style.module.scss';
import { Input } from '../../components/Input';
import api from '../../services/api';
import { Form } from '@unform/web';
import { Button } from '../../components/Button';

interface IData {
	rua: string;
    bairro: string;
    numero: string;
    cep: string;
    nprefeitura: string;
    ncompesa: string;
    ncelpe: string;
    valor: string;
    dia: string;
    finalidade: string;
    nome: string;
    email: string;
}

const FormItem: React.FC = ({ children }) => {
	return <div className={styles.formItem}>{children}</div>;
};

export const ViewRent: React.FC = () => {
	return (
        <div>
            <Form onSubmit={handleSubmit} className={styles.conteiner}>
                <div className={styles.form}>
                    <FormItem>
                        <h1>Dados do imóvel</h1>
                    </FormItem>
                    <FormItem>
                        <Input name="rua" type="text" placeholder="Rua" disabled={true}/>
                    </FormItem>
                    <FormItem>
                        <Input name="bairro" type="text" placeholder="Bairro" disabled={true}/>
                    </FormItem>
                    <FormItem>
                        <Input name="numero" type="text" placeholder="Número" disabled={true}/>
                    </FormItem>
                    <FormItem>
                        <Input name="cep" type="text" placeholder="CEP" disabled={true}/>
                    </FormItem>
                    <FormItem>
                        <Input name="nprefeitura" type="text" placeholder="Nº prefeitura" disabled={true}/>
                    </FormItem>
                    <FormItem>
                        <Input name="ncompesa" type="text" placeholder="Nº compesa" disabled={true}/>
                    </FormItem>
                    <FormItem>
                        <Input name="ncelpe" type="text" placeholder="Nº celpe" disabled={true}/>
                    </FormItem>
                </div>
                <div className={styles.form}>
                    <FormItem>
                        <h1>Contrato do aluguel</h1>
                    </FormItem>
                    <FormItem>
                        <Input name="valor" type="text" placeholder="Valor" disabled={true}/>
                    </FormItem>
                    <FormItem>
                        <Input name="dia" type="text" placeholder="Dia do pagamento" disabled={true}/>
                    </FormItem>
                    <FormItem>
                        <Input name="finalidade" type="text" placeholder="Finalidade do imóvel alugado" disabled={true}/>
                    </FormItem>
                   
                 
                </div>
                <div className={styles.form}>
                    <FormItem>
                        <h1>Dados do locatário</h1>
                    </FormItem>
                    <FormItem>
                        <Input name="nome" type="text" placeholder="Nome" disabled={true}/>
                    </FormItem>
                    <FormItem>
                        <Input name="email" type="email" placeholder="Email" disabled={true}/>
                    </FormItem>
                    <FormItem>
                        <Button type={'submit'} >Editar contrato</Button>
                    </FormItem>
                    <FormItem>
                        <Button type={'submit'}>Excluir contrato</Button>
                    </FormItem>
                </div>
            </Form>
        </div>

	);
};

async function handleSubmit(data: IData) {
	const response = await api.post('auth/', data);
	console.log('Response:', response.data);
}