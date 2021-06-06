import { getCustomRepository, Repository } from 'typeorm';
import { Tenant } from '../entities/Tenant';
import { TenantRepository } from '../repositories/TenantRepository';

class TenantsService {
	private tenantsRepository: Repository<Tenant>;

	constructor() {
		this.tenantsRepository = getCustomRepository(TenantRepository);
	}

	async create({ email, name }: { email: String; name: String }) {
		//TODO Criar interface para esse metodo
		const tenantExists = await this.tenantsRepository.findOne({ email });

		if (tenantExists) return tenantExists;

		const newTenant = this.tenantsRepository.create({ email, name });

		console.log('New Tenant:', newTenant);

		await this.tenantsRepository.save(newTenant);

		return newTenant;
	}
}

export { TenantsService };
