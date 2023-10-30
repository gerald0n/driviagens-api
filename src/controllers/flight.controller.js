import { flightService } from '../services/flightServices.js'

async function insertNewFlight(req, res) {
   const {
      rows: [id]
   } = await flightService.insertNewFlight(req.body)

   res.status(201).send({ ...id, ...req.body })
}

export const flightController = { insertNewFlight }
