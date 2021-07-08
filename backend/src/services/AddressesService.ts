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
		const AddressExists = await this.AddresssRepository.findOne({ zipCode,  number});

		if (AddressExists) return false;

		const newAddress = this.AddresssRepository.create({country, state, city, street, number, zipCode});

		console.log('New Address:', newAddress);

		await this.AddresssRepository.save(newAddress);

		return newAddress;
	}
}

export { AddressesService };
