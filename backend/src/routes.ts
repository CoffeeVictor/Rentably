import { Router } from 'express';
import { AuthController } from './controllers/AuthController';
import { TenantController } from './controllers/TenantController';
import { UsersController } from './controllers/UsersController';
import './database';

const routes = Router();

const usersController = new UsersController();
const authController = new AuthController();
const tenantController = new TenantController();

routes.get('/ping', (request, response) => {
	return response.json({
		message: 'pong',
	});
});

routes.post('/users', usersController.create);

// routes.put('/users/:email', usersController.update);

routes.post('/auth/login', authController.login);

routes.get('/abc', tenantController.create);

export { routes };
