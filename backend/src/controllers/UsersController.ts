import { Request, Response } from 'express';
import { IUserData } from '../@types/User';
import { User } from '../entities/User';
import { UsersService } from '../services/UsersService';

class UsersController {
	async create(request: Request, response: Response): Promise<Response> {
		const { email, name, password }: IUserData = request.body;

		const usersService = new UsersService();

		const user = await usersService.create({ email, name, password });

		const responseData = cleanUser(user);

		return response.json(responseData);
	}

	// async update(request: Request, response: Response) {
	// 	const { email } = request.params;

	// 	const { name, password } = request.body;

	// 	const usersService = new UsersService();

	// 	const user = await usersService.update({ email, name, password });

	// 	if(!user)

	// 	return response.json(user);
	// }
}

function cleanUser(user: User) {
	const { email, name, created_at } = user;
	return { email, name, created_at };
}

export { UsersController };
