import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Contract } from './Contract';

@Entity("bills")
export class Bill {
    @PrimaryColumn()
	id: string;

	@ManyToOne(()=>Contract, contract=>contract.id)
	contract: Contract;

	@Column()
	expirationDate: Date;

	@Column()
	paymentDate: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
