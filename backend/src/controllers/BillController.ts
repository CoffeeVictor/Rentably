import {Request, Response} from 'express'
import { IBillData } from '../@types/Bill'
import { BillRepository } from '../repositories/BillRepository'
import { BillService } from '../services/BillService'

class BillController{

    async create(request: Request, response: Response): Promise<Response>{
        const {id, expirationDate, paymentDate}: IBillData = request.body;

        const billService = new BillService();

        const bill = await billService.create({id, expirationDate, paymentDate})

        return response.json(bill)

    }

    async read(response: Response){

        const billService = new BillService();

        const bill = await billService.read();

        if (bill)
			return response.json(bill)
		else
			return response.status(404).send('Not Found')
    }


    async update(request: Request, response: Response) {
        const { id, expirationDate, paymentDate}: IBillData = request.body;

        const billService = new BillService();

        const bill = await billService.update({id, expirationDate, paymentDate});

        // if(!user)

        return response.json(bill);

    }

    async delete(request: Request, response: Response) {

		const { id } = request.body

		const billService = new BillService()

		const bill = await billService.delete( id )

		return response.json(bill)
		
	}




}

export {BillController}