import { getCustomRepository, Repository } from 'typeorm';
import { IBillData } from '../@types/Bill';
import { Bill } from '../entities/Bill';
import { BillRepository} from '../repositories/BillRepository';

class BillService {
	private billRepository: Repository<Bill>;

	constructor() {
		this.billRepository = getCustomRepository(BillRepository);
	}

	async create(billData: IBillData) {
		const {id, expirationDate, paymentDate} = billData;

		const billExists = await this.billRepository.findOne(id)

		if (billExists) return billExists;

		const newBill = this.billRepository.create({id, expirationDate, paymentDate});

		console.log('New Tenant:', newBill);

		await this.billRepository.save(newBill);

		return newBill;
	}

	async read() {
		return this.billRepository.find();
	}


	async update(billData: IBillData ) {
		const {id, expirationDate, paymentDate} = billData;

		const bill = await this.billRepository.update( { id }, {expirationDate, paymentDate} )
	
		return bill;
	}



	async delete(billData: IBillData){

		const { id } = billData
		
		const deleting = await this.billRepository.delete(id)

		return deleting

	}


}

export { BillService };
