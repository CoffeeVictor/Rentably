import { Router } from 'express';
import { AddressController } from './controllers/AddressController';
import { AuthController } from './controllers/AuthController';
import { TenantController } from './controllers/TenantController';
import { UsersController } from './controllers/UsersController';
import './database';

const routes = Router();

const usersController = new UsersController();
const authController = new AuthController();
const tenantController = new TenantController();
const addressController = new AddressController();

routes.get('/', (request, response) => {
	return response.json({
		message: 'Hello World from SERVER!',
	});
});

routes.post('/users', usersController.create);

routes.get('/users', usersController.read);

routes.put('/users/:email', usersController.update);

routes.delete('/users/:email', usersController.delete);

routes.post('/tenant', tenantController.create);

routes.get('/tenant/', tenantController.read);

routes.put('/tenant/:email', tenantController.update);

routes.delete('/tenant/:email', tenantController.delete);

routes.post('/auth/login', authController.login);

routes.post('/address', addressController.create);

routes.get('/address/', addressController.read);

routes.put('/address/:zipCode', addressController.update);

routes.delete('/address/:zipCode', addressController.delete);

export { routes };
