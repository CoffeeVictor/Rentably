import { IContractData } from "./Contract";

export interface IBillData {
	billId: string;
	expirationDate: Date;
	paymentDate: Date;
}
