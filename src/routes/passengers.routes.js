import { Router } from 'express'
import { passengerController } from '../controllers/passenger.controller.js'
import validateSchema from '../middlewares/validateSchema.js'
import { passengerSchema } from '../schemas/passengerSchema.js'

const passengersRoutes = Router()

passengersRoutes.post(
   '/passenger',
   validateSchema(passengerSchema),
   passengerController.insertPassenger
)

passengersRoutes.get('/passengers/travels', passengerController.listPassengers)

export default passengersRoutes
