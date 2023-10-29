import { passengerService } from '../services/passengerServices.js'

async function insertPassenger(req, res) {
   const { firstName, lastName } = req.body

   const {
      rows: [id]
   } = await passengerService.insertPassenger(req.body)

   res.status(201).send({ ...id, firstName, lastName })
}

export const passengerController = { insertPassenger }
