import { IAddressData } from "./Address";
import { IBillData } from "./Bill";

export interface IPropertyData {
	address: IAddressData;
	waterBillContract: IBillData;
	eletricBillContract: IBillData;
	propertyTaxNumber: number;
}
