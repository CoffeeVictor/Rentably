import { IBillData } from './Bill';

export interface IContractData {
	rent: Number;
	payday: Number;
	tenant: {
		email: String;
		name: String;
	};
	property: {
		waterBillContract?: String;
		electricBillContract?: String;
		propertyTaxNumber: String;
		address: {
			contry: String;
			state?: String;
			city?: String;
			street?: String;
			number: Number;
			zipCode: String;
		};
	};
	bill?: [IBillData]; //Apenas no            get, não vem em posts
}
