import httpStatus from 'http-status'
import { passengerService } from '../services/passengerServices.js'

async function insertPassenger(req, res) {
   const { firstName, lastName } = req.body

   const {
      rows: [id]
   } = await passengerService.insertPassenger(req.body)

   res.status(httpStatus.CREATED).send({ ...id, firstName, lastName })
}

async function listPassengers(req, res) {

   const { name } = req.query

   const result = await passengerService.listPassengers(name)

   res.status(httpStatus.OK).send(result.rows)

}

export const passengerController = { insertPassenger, listPassengers }
