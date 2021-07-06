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
}

export { TenantController };
