import { passengerService } from '../services/passengerServices.js'

async function insertPassenger(req, res) {
   const { firstName, lastName } = req.body

   const {
      rows: [id]
   } = await passengerService.insertPassenger(req.body)

   res.status(201).send({ ...id, firstName, lastName })
}

async function listPassengers(req, res) {

   const { name } = req.query

   const result = await passengerService.listPassengers(name)

   res.status(200).send(result.rows)

}

export const passengerController = { insertPassenger, listPassengers }
