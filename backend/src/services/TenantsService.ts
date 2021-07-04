import { getCustomRepository, Repository } from 'typeorm';
import { ITenantData } from '../@types/Tenant';
import { Tenant } from '../entities/Tenant';
import { TenantRepository } from '../repositories/TenantRepository';

class TenantsService {
	private tenantsRepository: Repository<Tenant>;

	constructor() {
		this.tenantsRepository = getCustomRepository(TenantRepository);
	}

	async create(tenantData: ITenantData) {
		const {email, name} = tenantData;

		const tenantExists = await this.tenantsRepository.findOne({ email });

		if (tenantExists) return tenantExists;

		const newTenant = this.tenantsRepository.create({ email, name });

		console.log('New Tenant:', newTenant);

		await this.tenantsRepository.save(newTenant);

		return newTenant;
	}

	async read() {
		return this.tenantsRepository.find();
	}


	async update(tenantData: ITenantData ) {
		const { email, name} = tenantData;

		const tenant = await this.tenantsRepository.update( { email }, { email, name } )
	
		return tenant;
	}



	async delete(tenantData: ITenantData){

		const { email } = tenantData
		
		const deleting = await this.tenantsRepository.delete({email})

		return deleting

	}


}

export { TenantsService };
