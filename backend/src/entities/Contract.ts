import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Property } from './Property';
import { Tenant } from './Tenant';
import { User } from './User';

@Entity("contracts")
export class Contract {
    @PrimaryColumn()
	id: String;

	@ManyToOne(()=>User, user => user.id)
	owner: User;

	@ManyToOne(()=>Tenant, tenant => tenant.id)
	tenant: Tenant;

    @OneToOne(()=>Property)
	property: Property;

    @Column({
        type:"float"
    })
    rent:number

    @Column({
        type:"int"
    })
    payday:number

    @CreateDateColumn()
	createdAt: Date;
    
	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
