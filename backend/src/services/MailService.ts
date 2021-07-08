import nodemailer from 'nodemailer';
import nodeSchedule from 'node-schedule';
import { ContractRepository } from '../repositories/ContractRepository';
import { getCustomRepository } from 'typeorm';
import { Contract } from '../entities/Contract';
import { BillRepository } from '../repositories/BillRepository';
import { UsersRepository } from '../repositories/UsersRepository';
class MailService {
	private transport: nodemailer.Transporter;
	private inited = false;
	constructor() {
		this.transport = nodemailer.createTransport({
			host: 'smtp.mailtrap.io',
			port: 2525,
			auth: {
				user: '42ab19c2dcc5cb',
				pass: 'b4eb404b8e2d87',
			},
		});
	}

	async init() {
		const usersRepository = getCustomRepository(UsersRepository);
		const users = await usersRepository.find();
		users.forEach(user => {
			setInterval(async () => {
				const contractsRepository = getCustomRepository(ContractRepository);
				const userContracts = await contractsRepository.find({
					where: {
						owner: user,
					},
				});

				const inadimplents = userContracts.map(contract => {
					if (contract.bills.some(bill => bill.paymentDate === null)) {
						return contract.tenant.name;
					}
				});

				const emailBody = `Hello ${
					user.name
				}. These are the tenants that didn't pay the rent: ${inadimplents.join(
					', '
				)}`;
				this.transport.sendMail({
					from: 'Rentably <no-reply@rentably.com>',
					to: `${user.email}`,
					subject: 'Rentably Inadimplents',
					text: emailBody,
				});
			}, 60 * 1000);
		});
	}

	addContractToCron(contract: Contract, autoPay?: boolean) {
		if (!this.inited) {
			this.inited = true;
			this.init();
		}

		let foo = async (id: string) => {};

		if (autoPay) {
			foo = async (id: string) => {
				const billsRepository = getCustomRepository(BillRepository);
				const bill = await billsRepository.findOne(id);
				bill.paymentDate = new Date();
				await billsRepository.save(bill);
				const emailBody = `Hello ${contract.owner.name}. Your tenant ${contract.tenant.name} has payed a bill for ${contract.rent}.`;
				this.transport.sendMail({
					from: 'Rentably <no-reply@rentably.com>',
					to: `${contract.owner.email}`,
					subject: 'Rentably Payment',
					text: emailBody,
				});
			};
		}

		setInterval(() => {
			const billsRepository = getCustomRepository(BillRepository);
			const newBill = billsRepository.create({ contract });
			const emailBody = `Hello ${contract.tenant.name}. You have rent bill for ${contract.owner.name} of $ ${contract.rent}.`;
			this.transport.sendMail({
				from: 'Rentably <no-reply@rentably.com>',
				to: `${contract.tenant.email}`,
				subject: 'Rentably Bill',
				text: emailBody,
			});
			foo(newBill.id);
		}, 1000 * 30);
	}
}

const mailService = new MailService();

export default mailService;
