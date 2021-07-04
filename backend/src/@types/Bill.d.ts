import { IContractData } from "./Contract";

export interface IBillData {
	id: string;
	expirationDate: Date;
	paymentDate: Date;
}
