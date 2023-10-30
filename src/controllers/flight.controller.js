import { flightService } from '../services/flightServices.js'

async function insertNewFlight(req, res) {
   const { origin, destination, date } = req.body
   const {
      rows: [id]
   } = await flightService.insertNewFlight(req.body)

   res.status(201).send({ ...id, origin, destination, date })
}

export const flightController = { insertNewFlight }
