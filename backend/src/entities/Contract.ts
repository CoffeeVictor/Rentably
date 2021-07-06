import {
	BeforeInsert,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Bill } from './Bill';
import { Property } from './Property';
import { Tenant } from './Tenant';
import { User } from './User';

@Entity('contracts')
export class Contract {
	@PrimaryColumn()
	id: String;

	@ManyToOne(() => User, user => user.id)
	owner: User;

	@ManyToOne(() => Tenant, tenant => tenant.id)
	tenant: Tenant;

	@OneToOne(() => Property)
	@JoinColumn()
	property: Property;

	@OneToMany(() => Bill, bill => bill.contract)
	@JoinColumn()
	bills: Bill[];

	@Column({
		type: 'float',
	})
	rent: number;

	@Column({
		type: 'int',
	})
	payday: number;

	@CreateDateColumn()
	createdAt: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}

	@BeforeInsert()
	private setCreateDate(): void {
		this.createdAt = new Date();
	}
}
