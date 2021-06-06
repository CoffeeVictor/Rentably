import { EntityRepository, Repository } from 'typeorm';
import { Tenant } from '../entities/Tenant';

@EntityRepository(Tenant)
class TenantRepository extends Repository<Tenant> {}

export { TenantRepository };
