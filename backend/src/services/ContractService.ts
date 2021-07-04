import { getCustomRepository, Repository } from "typeorm";
import { IContractData } from "../@types/Contract";
import { Contract } from "../entities/Contract";
import { User } from "../entities/User";
import { ContractRepository } from "../repositories/ContractRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import { TenantRepository} from "../repositories/TenantRepository"
import { PropertyRepository} from "../repositories/PropertyRepository"
import { Tenant } from "../entities/Tenant";
import { Property } from "../entities/Property";

class ContractService  {


    private contractRepository: Repository<Contract>;

    private userrep: Repository<User>;

    private tenanrep: Repository<Tenant>;

    private proprep: Repository<Property>;

    constructor(){ 
        this.contractRepository = getCustomRepository(ContractRepository);

        this.userrep = getCustomRepository(UsersRepository);

        this.tenanrep = getCustomRepository(TenantRepository);

        this.proprep = getCustomRepository(PropertyRepository);
    }

    async create(contractData: IContractData){

        const {ownerId, tenantId, propertyId, rent, payday} = contractData;

        const owner = await this.userrep.findOne(ownerId);
        
        const tenant = await this.tenanrep.findOne(tenantId);

        const property = await this.proprep.findOne(propertyId);

        const contractExists = await this.contractRepository.findOne( propertyId );

        if (contractExists) return false

        const newcontract = this.contractRepository.create({owner, tenant, property, rent, payday });

        console.log('New Contract:', newcontract);

        await this.contractRepository.save(newcontract);

        return newcontract;
    }

    async read(){

        return this.contractRepository.find()

    }

    async update(contractData: IContractData) {
		const { ownerId, tenantId, propertyId, rent, payday} = contractData;

        const owner = await this.userrep.findOne(ownerId);
        
        const tenant = await this.tenanrep.findOne(tenantId);

        const property = await this.proprep.findOne(propertyId);

        const contractExists = await this.contractRepository.findOne( propertyId );

        if (contractExists) return false

		const contract = await this.contractRepository.update( { property }, { owner, tenant, property, rent, payday} )
	
		return contract;
	}

    async delete(deletion: string){

        const deleting = await this.contractRepository.delete(deletion)

        return deleting

    }


}

export {ContractService}