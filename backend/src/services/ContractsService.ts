import { getCustomRepository, Repository } from 'typeorm';
import { IContractData } from '../@types/Contract';
import { Contract } from '../entities/Contract';
import { ContractRepository } from '../repositories/ContractRepository';
import { getManager } from 'typeorm';
import { User } from '../entities/User';

interface IAuthUser {
	email: string;
	name: string;
	password: string;
	cpf: string;
	id: string;
}

interface RequestDataDTO extends IContractData {
	authUser: IAuthUser;
}

class ContractsService {
	private contractsRepository: Repository<Contract>;

	constructor() {
		this.contractsRepository = getCustomRepository(ContractRepository);
	}

	async create(contractData: RequestDataDTO) {
		let manager = getManager();
		contractData.property.address;
		const owner = await manager.findOne(User, contractData.authUser.id);
		const contract = this.contractsRepository.create({ ...contractData });
		contract.owner = owner;
		console.log('Contract:', contract);
		try {
			//const something = await this.contractsRepository.save(contract);
			await manager.save(contract.property.address);
			await manager.save(contract.property);
			await manager.save(contract.tenant);
			const something = await manager.save(contract);
			console.log('something:', something);
		} catch (e) {
			console.log('Error:', e);
		}
		return contract;
	}

	async list(id: string) {
		const contractList = await this.contractsRepository.find({
			where: {
				owner: {
					id,
				},
			},
			relations: ['tenant', 'property', 'property.address', 'bills'],
		});

		return contractList;
	}

	async getContractNumberByUser(userId: string) {
		const contracts = await this.contractsRepository
			.createQueryBuilder('contract')
			.where('contract.ownerId = :userId', { userId })
			.getMany();
		/*const months:number[] = []
		contracts.forEach(element => {
			if(months.includes(element.createdAt.getMonth()))
		})*/
		return contracts.length;
	}
}

export { ContractsService };
