import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';
import { compareSync } from 'bcrypt';
import *  as jwt from 'jsonwebtoken';
import { json } from 'express';

class AuthService {
	private usersRepository: Repository<User>;

	constructor() {
		this.usersRepository = getCustomRepository(UsersRepository);
	}

	async authenticate(email: string, password: string) {
		const user = await this.usersRepository.findOne({ email });

		if (!user) return false;

		const hash = user.password_hash;

		const isCorrectPassword = compareSync(password, hash);

		if (isCorrectPassword) {
			console.log(process.env.ACCESS_TOKEN_SECRET);
			const accessToken = jwt.sign({ "username": user.name }, process.env.ACCESS_TOKEN_SECRET);
			return accessToken;
		}

		return isCorrectPassword;
	}
}

export { AuthService };
