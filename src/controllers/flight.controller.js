import httpStatus from 'http-status'
import { flightService } from '../services/flightServices.js'

async function insertNewFlight(req, res) {
   const { origin, destination, date } = req.body
   const {
      rows: [id]
   } = await flightService.insertNewFlight(req.body)

   res.status(httpStatus.CREATED).send({ ...id, origin, destination, date })
}

async function listFlights(req, res) {
   const { origin, destination } = req.query

   const result = await flightService.listFlights(origin, destination)

   res.status(httpStatus.OK).send(result.rows)
}

export const flightController = { insertNewFlight, listFlights }
