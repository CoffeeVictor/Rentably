import { Router } from 'express';
import { UsersController } from './controllers/UsersController';
import './database';

const routes = Router();

const usersController = new UsersController();

routes.get('/', (request, response) => {
	return response.json({
		message: 'Hello World from SERVER!',
	});
});

routes.post('/users', usersController.create);

routes.put('/users/:email', usersController.update);

export { routes };
