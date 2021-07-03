import { Request, Response } from 'express';
import { IAddressData } from '../@types/Address';
import { AddressesService } from '../services/AdressesService'

class AddressController {
	async create(request: Request, response: Response): Promise<Response> {
		const {country, state, city, street, number, zipCode}:IAddressData = request.body;

		const addressService = new AddressesService();

		const address = await addressService.create({country, state, city, street, number, zipCode});

		return response.json(address);
	}


	async read(request: Request, response: Response){
		const zipCode = request.body.zipCode

		const addressService = new AddressesService();

		const address = await addressService.findByZip(zipCode)

		if(address)
			return response.json( address )
		else
			return response.status(404).send('Not Found')

	}

	 async update(request: Request, response: Response) {
	 	const {country, state, city, street, number, zipCode}: IAddressData = request.body;

	 	const addressService = new AddressesService();

	 	const address = await addressService.update({country, state, city, street, number, zipCode});

	 	// if(!user)

	 	return response.json(address);
	 }

	async delete(request: Request, response: Response) {

		const { zipCode } = request.body;

		const addressService = new AddressesService();
		const address = await addressService.delete( zipCode )

		return response.json(address)



	}




}

export { AddressController };
