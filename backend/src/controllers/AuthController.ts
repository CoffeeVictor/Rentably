import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import { UsersService } from '../services/UsersService';
class AuthController {
	async login(request: Request, response: Response): Promise<Response> {
		const { email, password } = request.body;

		const authService = new AuthService();

		const isUserAuthenticated = await authService.authenticate(email, password);

		const usersService = new UsersService();

		if (!isUserAuthenticated) {
			return response
				.status(401)
				.send({ message: 'Incorrect email or password' });
		}

		return response.json({ user: usersService.findByEmail(email) });
	}
}

export { AuthController };
