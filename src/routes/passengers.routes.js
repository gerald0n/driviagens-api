import { Router } from 'express'
import { passengerController } from '../controllers/passenger.controller.js'
import validateSchema from '../middlewares/validateSchema.js'
import { passengerSchema } from '../schemas/passengerSchema.js'

const passengersRoutes = Router()

passengersRoutes.post(
   '/passenger',
   validateSchema(passengerSchema),
   passengerController.insertNewPassenger
)

passengersRoutes.get('passengers/travels')

export default passengersRoutes
