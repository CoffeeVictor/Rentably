import { Router } from 'express';
import { AuthController } from './controllers/AuthController';
import { UsersController } from './controllers/UsersController';
import { ContractsController } from './controllers/ContractsController';

import './database';

const routes = Router();

const usersController = new UsersController();
const authController = new AuthController();
const contractsController = new ContractsController();
// const tenantController = new TenantController();
routes.get('/ping', (request, response) => {
	return response.json({
		message: 'pong',
	});
});

routes.post('/users', usersController.create);

// routes.put('/users/:email', usersController.update);

routes.post('/auth/login', authController.login);

routes.post('/contracts', contractsController.create);

routes.get('/contracts', contractsController.list);

//routes.get('/contracts/:userId', contractsController.getContractNumberByUser);

// routes.get('/properties', propertiesController.list);
// routes.get('/properties/:id', propertiesController.get);
// routes.post('/properties', propertiesController.create);
// routes.delete('/properties/:id', propertiesController.delete);

export { routes };
