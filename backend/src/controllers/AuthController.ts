import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

class AuthController {
	async login(request: Request, response: Response): Promise<Response> {
		const { email, password } = request.body;

		const authService = new AuthService();

		const isUserAuthenticated = await authService.authenticate(email, password);

		if (!isUserAuthenticated) {
			return response
				.status(403)
				.send({ message: 'Incorrect email or password' });
		}

		return response.json({ message: 'Correct password' });
	}
}

export { AuthController };
