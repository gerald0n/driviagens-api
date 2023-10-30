import { Router } from 'express'
import { flightController } from '../controllers/flight.controller.js'
import validateSchema from '../middlewares/validateSchema.js'
import { flightSchema } from '../schemas/flightSchema.js'

const flightsRoutes = Router()

flightsRoutes.post('/flights', validateSchema(flightSchema), flightController.insertNewFlight)
flightsRoutes.get('/flights')

export default flightsRoutes
