import { Router } from 'express';
import { AddressController } from './controllers/AddressController';
import { AuthController } from './controllers/AuthController';
import { TenantController } from './controllers/TenantController';
import { UsersController } from './controllers/UsersController';
import { BillController } from './controllers/BillController';
import { PropertyController } from './controllers/PropertyController';
import { ContractController } from './controllers/ContractController';
import './database';

const routes = Router();

const usersController = new UsersController();
const authController = new AuthController();
const tenantController = new TenantController();
const addressController = new AddressController();
const billController = new BillController();
const propController = new PropertyController();
const contractController = new ContractController();

routes.get('/', (request, response) => {
	return response.json({
		message: 'Hello World from SERVER!',
	});
});

//Rotas Usuario

routes.post('/users', usersController.create);

routes.get('/users', usersController.read);

routes.put('/users/:email', usersController.update);

routes.delete('/users/:email', usersController.delete);

//Rotas Tenant

routes.post('/tenant', tenantController.create);

routes.get('/tenant/', tenantController.read);

routes.put('/tenant/:email', tenantController.update);

routes.delete('/tenant/:email', tenantController.delete);

//Login

routes.post('/auth/login', authController.login);

//Rotas Address

routes.post('/address', addressController.create);

routes.get('/address/', addressController.read);

routes.put('/address/:zipCode', addressController.update);

routes.delete('/address/:zipCode', addressController.delete);

//Rotas Bill

routes.post('/bill', billController.create);

routes.get('/bill/', billController.read);

routes.get('bill/:id', billController.update);

routes.get('/bill/:id', billController.delete);

//Rotas Property

routes.post('/property', propController.create);

routes.get('property/', propController.read);

routes.put('/property/:propertyTaxNumber', propController.update);

routes.delete('/property/:propertyTaxNumber', propController.delete);

//Rotas Contract

routes.post('/contract', contractController.create);

routes.get('/contract/', contractController.read);

routes.get('/contract/:propertyId', contractController.update);

routes.get('/contract/:propertyId', contractController.delete);

export { routes };
