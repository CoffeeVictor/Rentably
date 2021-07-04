import { ITenantData } from "./Tenant";
import { IPropertyData } from "./Property";
import { IUserData } from "./User";

export interface IContractData {
	ownerId: string;
	tenantId: string;
	propertyId: string;
    rent:number;
    payday:number;
}
