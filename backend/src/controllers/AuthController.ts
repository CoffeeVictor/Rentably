import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import {UsersService} from "../services/UsersService";

class AuthController {
	async login(request: Request, response: Response): Promise<Response> {
		const { email, password } = request.body;
		
		const authService = new AuthService();
		const userService = new UsersService();
		const isUserAuthenticated = await authService.authenticate(email, password);

		if (!isUserAuthenticated) {
			return response
				.status(403)
				.send({ message: 'Incorrect email or password' });
		}

		const user = userService.findByEmail(email)

		return response.json({ user });
	}
}

export { AuthController };
