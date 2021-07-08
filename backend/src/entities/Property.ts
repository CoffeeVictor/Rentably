import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Address } from './Address';

@Entity('properties')
export class Property {
	@PrimaryColumn()
	id: string;

	@OneToOne(() => Address)
	@JoinColumn()
	address: Address;

	@Column({
		nullable: true,
	})
	waterBillContract: string;

	@Column({
		nullable: true,
	})
	eletricBillContract: string;

	@Column()
	propertyTaxNumber: string;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
