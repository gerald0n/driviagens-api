import { travelService } from '../services/travelService.js'

async function insertNewTravel(req, res) {
   const { passengerId, flightId } = req.body
   const {
      rows: [id]
   } = await travelService.insertNewTravel(req.body)

   res.status(201).send({ ...id, passengerId, flightId })
}

export const travelController = { insertNewTravel }
