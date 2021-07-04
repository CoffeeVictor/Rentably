import { Request, Response } from 'express';
import { IContractData } from '../@types/Contract';
import { ContractService } from '../services/ContractService';

class ContractController {
	async create(request: Request, response: Response): Promise<Response> {
		const {ownerId, tenantId, propertyId, rent, payday}:IContractData = request.body;

		const contractService = new ContractService();

		const contract = await contractService.create({ownerId, tenantId, propertyId, rent, payday});

		return response.json(contract);
	}


	async read(request: Request, response: Response){

		const contractsService = new ContractService()

		const contract = await contractsService.read()

		if(contract)
			return response.json( contract )
		else
			return response.status(404).send('Not Found')

	}

	 async update(request: Request, response: Response) {
	 	const { ownerId, tenantId, propertyId, rent, payday }: IContractData = request.body;

	 	const contractService = new ContractService();

	    const contract = await contractService.update({ ownerId, tenantId, propertyId, rent, payday });

	 	return response.json(contract);
	 }

	async delete(request: Request, response: Response) {

		const { propertyId } = request.body.propertyId

		const contractService = new ContractService()

		const contract = await contractService.delete( propertyId )

		return response.json(contract)

	}




}

export {ContractController}
