import { Request, Response} from 'express'
import { IPropertyData } from '../@types/Property'
import { PropertyService } from '../services/PropertyService'

class PropertyController{
    async create(request: Request, response: Response): Promise<Response>{
        const { address, waterBillContract, eletricBillContract, propertyTaxNumber}:IPropertyData = request.body;

		const propertysService = new PropertyService();

		const property = await propertysService.create({ address, waterBillContract, eletricBillContract, propertyTaxNumber});

		return response.json(property);
    }

    async read(response: Response){

        const propertyService = new PropertyService();

		const property = await propertyService.read();

		if(property)
			return response.json( property )
		else
			return response.status(404).send('Not Found')
    }

    async update(request: Request, response: Response){
        const { address, waterBillContract, eletricBillContract, propertyTaxNumber }: IPropertyData = request.body;

	 	const propertyService = new PropertyService();

	 	const property = await propertyService.update({ address, waterBillContract, eletricBillContract, propertyTaxNumber});

	 	return response.json(property);
    }

    async delete(request: Request, response: Response){

        const { propertyTaxNumber } = request.body

		const propertyService = new PropertyService()

		const property = await propertyService.delete( propertyTaxNumber )

		return response.json(property)
		
    }


}

export {PropertyController}