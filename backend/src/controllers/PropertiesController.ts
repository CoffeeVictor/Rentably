import { Request, Response } from 'express';
import { IPropertyData } from '../@types/Property';
import { PropertiesService } from '../services/PropertiesService';

class PropertiesController {
	private propertiesService = new PropertiesService();

	async create(request: Request, response: Response) {
		//pass
	}
	// async list() {
	// 	return this.propertiesService.list();
	// }
	// async get() {
	// 	return this.propertiesService.get();
	// }
	// async list() {
	// 	return this.propertiesService.list();
	// }
}

export { PropertiesController };
