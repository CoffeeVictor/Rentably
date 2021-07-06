import { IBillData } from './Bill';

export interface IContractData {
	rent: number;
	payday: number;
	tenant: {
		email: string;
		name: string;
	};
	property: {
		waterBillContract?: string;
		electricBillContract?: string;
		propertyTaxNumber: string;
		address: {
			country: string;
			state?: string;
			city?: string;
			street?: string;
			number: number;
			zipCode: string;
		};
	};
	bill?: [IBillData]; //Apenas no get, não vem em posts
}
