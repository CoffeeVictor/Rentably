import { Request, Response } from 'express';
import { TenantsService } from '../services/TenantsService';

class TenantController {
	async create(request: Request, response: Response): Promise<Response> {
		const { email, name } = request.body;

		const tenantsService = new TenantsService();

		const tenant = await tenantsService.create({ email, name });

		return response.json(tenant);
	}
}

export { TenantController };
