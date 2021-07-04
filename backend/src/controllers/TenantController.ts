import { Request, Response } from 'express';
import { ITenantData } from '../@types/Tenant';
import { TenantsService } from '../services/TenantsService';

class TenantController {
	async create(request: Request, response: Response): Promise<Response> {
		const { email, name }:ITenantData = request.body;

		const tenantsService = new TenantsService();

		const tenant = await tenantsService.create({ email, name });

		return response.json(tenant);
	}


	async read(request: Request, response: Response){

		const tenantsService = new TenantsService();

		const tenant = await tenantsService.read();

		if(tenant)
			return response.json( tenant )
		else
			return response.status(404).send('Not Found')

	}

	 async update(request: Request, response: Response) {
	 	const { email, name }: ITenantData = request.body;

	 	const tenantsService = new TenantsService();

	 	const tenant = await tenantsService.update({ email, name});

	 	// if(!user)

	 	return response.json(tenant);
	 }

	async delete(request: Request, response: Response) {

		const { email } = request.body

		const tenantsService = new TenantsService()

		const tenant = await tenantsService.delete( email )

		return response.json(tenant)
		
	}




}

export { TenantController };
