import nodemailer from 'nodemailer';

class MailService {
	private transport: nodemailer.Transporter;

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
}

export { MailService };
