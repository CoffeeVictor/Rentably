import { Router } from 'express';
import { AuthController } from './controllers/AuthController';
import { UsersController } from './controllers/UsersController';
import './database';

const routes = Router();

const usersController = new UsersController();
const authController = new AuthController();

routes.get('/', (request, response) => {
	return response.json({
		message: 'Hello World from SERVER!',
	});
});

routes.post('/users', usersController.create);

// routes.put('/users/:email', usersController.update);

routes.post('/auth/login', authController.login);

export { routes };
