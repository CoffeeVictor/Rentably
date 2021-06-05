import { Request, Response } from 'express';
import { IUserData } from '../@types/User';
import { User } from '../entities/User';
import { UsersService } from '../services/UsersService';

class UsersController {
	async create(request: Request, response: Response): Promise<Response> {
		const { email, name, password }: IUserData = request.body;

		const usersService = new UsersService();

		const user = await usersService.create({ email, name, password });

		return response.json(user);
	}

	async update(request: Request, response: Response) {
		const { email } = request.params;

		const { name, password } = request.body;

		const usersService = new UsersService();

		const user = await usersService.update({ email, name, password });

		return response.json(user);
	}
}

export { UsersController };
