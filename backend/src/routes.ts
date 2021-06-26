import { Router } from 'express';
import { AuthController } from './controllers/AuthController';
import { TenantController } from './controllers/TenantController';
import { UsersController } from './controllers/UsersController';
import './database';

const routes = Router();

const usersController = new UsersController();
const authController = new AuthController();
const tenantController = new TenantController();

routes.get('/', (request, response) => {
	return response.json({
		message: 'Hello World from SERVER!',
	});
});

routes.get("/users", usersController.read)

routes.post('/users', usersController.create);

// routes.put('/users/:email', usersController.update);

routes.post('/auth/login', authController.login);

routes.post('/tenants', tenantController.create);

export { routes };
