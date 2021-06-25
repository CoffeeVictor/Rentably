import { Request, Response } from 'express';
import { IUserData } from '../@types/User';
import { User } from '../entities/User';
import { UsersService } from '../services/UsersService';

class UsersController {
	async create(request: Request, response: Response): Promise<Response> {
		const { email, name, password, cpf }: IUserData = request.body;

		const usersService = new UsersService();

		const user = await usersService.create({ email, name, password, cpf });
		if (user){
			const responseData = cleanUser(user);
			return response.json(responseData);
		}
		else{
			return response
				   .status(401)
				   .send({ message: 'Email already taken' });
		}
		
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
	const { email, name, createdAt } = user;
	return { email, name, createdAt };
}

export { UsersController };
