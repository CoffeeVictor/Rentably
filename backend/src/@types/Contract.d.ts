import { ITenantData } from "./Tenant";
import { IPropertyData } from "./Property";
import { IUserData } from "./User";

export interface IContractData {
	ownerId: IUserData;
	tenantId: ITenantData;
	propertyId: IPropertyData;
    rent:number;
    payday:number;
	createdAt: Date;
}
