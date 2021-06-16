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

		if (userExists) return userExists;

		const user = this.usersRepository.create({
			email,
			name,
			password_hash: this.hashPassword(password),
			cpf,
		});

		await this.usersRepository.save(user);

		return user;
	}

	//TODO: Think more about this
	// async update(userData: IUserData) {
	// 	const { email, name, password } = userData;

	// 	await this.usersRepository.update(
	// 		{ email },
	// 		{ name, password_hash: this.hashPassword(password) }
	// 	);

	// 	const user = this.findByEmail(email);

	// 	return user;
	// }

	async findByEmail(email: string) {
		return this.usersRepository.findOne({
			email,
		});
	}
}

export { UsersService };
