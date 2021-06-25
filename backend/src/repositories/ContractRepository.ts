import { EntityRepository, Repository } from 'typeorm';
import { Contract } from '../entities/Contract';

@EntityRepository(Contract)
class ContractRepository extends Repository<Contract> {}

export { ContractRepository };
