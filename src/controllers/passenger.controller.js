import { passengerService } from '../services/passengerServices.js'

async function insertNewPassenger(req, res) {
   const { firstName, lastName } = req.body

   const {
      rows: [id]
   } = await passengerService.insertNewPassenger(req.body)

   res.status(201).send({ ...id, firstName, lastName })
}

export const passengerController = { insertNewPassenger }
