import { getCustomRepository, Repository } from 'typeorm';
import { IAddressData } from '../@types/Address';
import { Address } from '../entities/Address';
import { AddressRepository } from '../repositories/AddressRepository';

class AddressesService {
	private AddresssRepository: Repository<Address>;

	constructor() {
		this.AddresssRepository = getCustomRepository(AddressRepository);
	}

	async create(AddressData: IAddressData) {
		const {country, state, city, street, number, zipCode} = AddressData;
		const AddressExists = await this.AddresssRepository.findOne({ zipCode });

		if (AddressExists) return false;

		const newAddress = this.AddresssRepository.create({country, state, city, street, number, zipCode});

		console.log('New Address:', newAddress);

		await this.AddresssRepository.save(newAddress);

		return newAddress;
	}

	async findByZip(zipCode: string) {
		return this.AddresssRepository.findOne({zipCode})
	}

	async update(addressData: IAddressData){
		const {country, state, city, street, number, zipCode} = addressData;

		const address = await this.AddresssRepository.update( {zipCode} , {country, state, city, street, number, zipCode});

		return address;
	}

	async delete(addressData: IAddressData){

		const {zipCode} = addressData;

		const deleting = await this.AddresssRepository.delete( { zipCode } );

		return deleting;
	}

}

export { AddressesService };
