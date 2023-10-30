import { travelService } from '../services/travelService.js'

async function insertNewTravel(req, res) {
   const {
      rows: [id]
   } = await travelService.insertNewTravel(req.body)
   
   res.status(201).send({...id, ...req.body})
}

export const travelController = { insertNewTravel }
