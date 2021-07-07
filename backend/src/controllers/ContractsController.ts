import { Request, Response } from 'express';
import { IContractData } from '../@types/Contract';
import { ContractsService } from '../services/ContractsService';

class ContractsController {
	async list(request: Request, response: Response) {
		//const user = request.user;

		const user = {
			id: 'c1aae7bc-884b-49c3-a857-11984f1015eb',
		}; //TODO: Change later for JWT based user

		const contractsService = new ContractsService();

		const contractList = await contractsService.list(user.id);

		return response.json(contractList);
	}
	async create(request: Request, response: Response): Promise<Response> {
		const data: IContractData = request.body;

		const contractsService = new ContractsService();

		const contract = await contractsService.create(data);

		return response.json(contract);
	}

	async getContractNumberByUser(request: Request, response: Response) {
		const id = request.params['userId'];

		const contractsService = new ContractsService();

		const contractNum = await contractsService.getContractNumberByUser(id);

		return response.json(contractNum);
	}
}

export { ContractsController };
