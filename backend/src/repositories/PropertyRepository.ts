import { EntityRepository, Repository } from 'typeorm';
import { Property } from '../entities/Property';

@EntityRepository(Property)
class PropertyRepository extends Repository<Property> {}

export { PropertyRepository };