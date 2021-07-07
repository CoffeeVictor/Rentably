import { Request, Response } from 'express';
import { IContractData } from '../@types/Contract';
import { ContractsService } from '../services/ContractsService';

interface IAuthUser {
	email: string;
	name: string;
	cpf: string;
	id: string;
}

interface RequestDataDTO extends IContractData {
	authUser: IAuthUser;
}
class ContractsController {
	async list(request: Request, response: Response) {
		const user = request.body.authUser;

		const contractsService = new ContractsService();

		const contractList = await contractsService.list(user.id);

		return response.json(contractList);
	}

	async create(request: Request, response: Response): Promise<Response> {
		const data: RequestDataDTO = request.body;

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
