import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';
import { IUserData } from '../@types/User';
import { hashSync, genSaltSync } from 'bcrypt';

class UsersService {
	private usersRepository: Repository<User>;

	constructor() {
		this.usersRepository = getCustomRepository(UsersRepository);
	}

	private hashPassword(password: string) {
		const salt = genSaltSync();
		const hashedPassword = hashSync(password, salt);
		return hashedPassword;
	}

	async create(userData: IUserData) {
		const { email, name, password, cpf } = userData;

		const userExists = await this.findByEmail(email);

		if (userExists) return false;

		const user = this.usersRepository.create({
			email,
			name,
			passwordHash: this.hashPassword(password),
			cpf,
		});

		await this.usersRepository.save(user);

		return user;
	}

	async update(userData: IUserData) {
		const { email, name, password } = userData;

		const user = await this.usersRepository.update({ email }, { email, name, passwordHash: this.hashPassword(password) })

		return user;
	}

	async delete(email: string) {

		// const { email } = userData;

		// const exists = await this.findByEmail(email)

		// if(!exists) return false

		const deleting = this.usersRepository.delete({ email })

		return deleting



	}

	async findByEmail(email: string) {
		return this.usersRepository.findOne({
			email,
		});
	}
}

export { UsersService };
