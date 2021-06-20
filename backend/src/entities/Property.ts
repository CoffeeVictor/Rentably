import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Address } from './Address';

@Entity("properties")
export class Property {
    @PrimaryColumn()
	id: string;

	@OneToOne(() => Address)
	address: string;

	@Column({
		nullable: true,
	})
	waterBillContract: string;

	@Column({
		nullable: true,
	})
	eletricBillContract: string;

	@Column()
	propertyTaxNumber: number;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
