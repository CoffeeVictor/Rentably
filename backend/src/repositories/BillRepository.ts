import { EntityRepository, Repository } from 'typeorm';
import { Bill } from '../entities/Bill';

@EntityRepository(Bill)
class BillRepository extends Repository<Bill> {}

export { BillRepository };
