import { getCustomRepository, Repository } from 'typeorm';
import { IBillData } from '../@types/Bill';
import { Bill } from '../entities/Bill';
import { BillRepository} from '../repositories/BillRepository';

class BillService {
	private billRepository: Repository<Bill>;

	constructor() {
		this.billRepository = getCustomRepository(BillRepository);
	}

	// async create(billData: IBillData) {
	// 	const {billId, expirationDate, paymentDate} = billData;

	// 	const billExists = await this.billRepository.findOne({billId})

	// 	if (billExists) return billExists;

	// 	const newBill = this.billRepository.create({billId, expirationDate, paymentDate});

	// 	console.log('New Tenant:', newBill);

	// 	await this.billRepository.save(newBill);

	// 	return newBill;
	// }

	// async findByID(billId: string) {
	// 	return this.billRepository.findOne({ billId });
	// }


	// async update(billData: IBillData ) {
	// 	const {billId, expirationDate, paymentDate} = billData;

	// 	const bill = await this.billRepository.update( { billId }, {expirationDate, paymentDate} )
	
	// 	return bill;
	// }



	// async delete(billData: IBillData){

	// 	const { billId } = billData
		
	// 	const deleting = await this.billRepository.delete({billId})

	// 	return deleting

	// }


}

export { BillService };
