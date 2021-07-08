import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("addresses")
export class Address {
    @PrimaryColumn()
	id: string;

	@Column()
	country: string;

	@Column({
		nullable: true,
	})
	state: string;

	@Column({
		nullable: true,
	})
	city: string;

	@Column({
		nullable: true,
	})
	street: string;

	@Column({
		nullable: true,
	})
	number: number;

	@Column({
		nullable: true,
	})
	zipCode: string;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
