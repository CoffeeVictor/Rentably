import { IAddressData } from "./Address";
import { IBillData } from "./Bill";

export interface IPropertyData {
	address: string;
	waterBillContract: string;
	eletricBillContract: string;
	propertyTaxNumber: number;
}
