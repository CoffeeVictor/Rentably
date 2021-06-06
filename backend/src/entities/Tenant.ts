import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('tenants')
class Tenant {
	@PrimaryColumn()
	id: String;

	@Column()
	email: String;

	@Column()
	name: String;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}

export { Tenant };
