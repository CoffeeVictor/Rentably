import { getCustomRepository, Repository } from "typeorm";
import { IPropertyData } from "../@types/Property";
import { IAddressData } from "../@types/Address";
import { Property } from "../entities/Property";
import { Bill } from "../entities/Bill";
import { Address } from "../entities/Address";
import { PropertyRepository } from "../repositories/PropertyRepository";
import { BillRepository } from "../repositories/BillRepository";
import { AddressRepository } from "../repositories/AddressRepository";



class PropertyService{

    private propRep: Repository<Property>;

    private addRep: Repository<Address>;

    private billRep: Repository<Bill>;


    constructor(){

        this.propRep = getCustomRepository(PropertyRepository);

        this.addRep = getCustomRepository(AddressRepository);

        this.billRep = getCustomRepository(BillRepository);
    }

    async create(propertyData: IPropertyData){

        const {address, waterBillContract, eletricBillContract, propertyTaxNumber} = propertyData

        const add = await this.addRep.findOne(address);
        if (!add) return false

        const water = await this.billRep.findOne(waterBillContract);
        if (!water) return false

        const elec = await this.billRep.findOne(eletricBillContract);
        if (!elec) return false

        const propExists = await this.propRep.findOne(propertyTaxNumber);

        if (propExists) return false

        const newprop = this.propRep.create({ address, waterBillContract, eletricBillContract, propertyTaxNumber})

        console.log('New Property: ', newprop);

        await this.propRep.save(newprop);

        return newprop;
    }

    async read(){

        return this.propRep.find();
        

    }

    async update(propertyData: IPropertyData){

        const {address, waterBillContract, eletricBillContract, propertyTaxNumber} = propertyData;

        const propExists = await this.propRep.findOne(propertyTaxNumber);
        if (propExists) return false

        const add = await this.addRep.findOne(address);
        if (!add) return false

        const water = await this.billRep.findOne(waterBillContract);
        if (!water) return false

        const elec = await this.billRep.findOne(eletricBillContract);
        if (!elec) return false

        const propup = this.propRep.update({propertyTaxNumber}, {address, waterBillContract, eletricBillContract, propertyTaxNumber} );

        return propup;

    }

    async delete(deletion: string){

        const deleting = this.propRep.delete(deletion);

        return deleting;

    }



}

export {PropertyService}