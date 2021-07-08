import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';
import { compareSync } from 'bcrypt';

class AuthService {
	private usersRepository: Repository<User>;

	constructor() {
		this.usersRepository = getCustomRepository(UsersRepository);
	}

	async authenticate(email: string, password: string) {
		const user = await this.usersRepository.findOne({ email });

		if (!user) return false;

		const hash = user.passwordHash;

		const isCorrectPassword = compareSync(password, hash);

		return isCorrectPassword;
	}
}

export { AuthService };
