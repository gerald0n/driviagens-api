import { Router } from 'express'
import validateSchema from '../middlewares/validateSchema.js'
import { citySchema } from '../schemas/citiesSchema.js'
import { cityController } from '../controllers/city.controller.js'

const citiesRoutes = Router()

citiesRoutes.post('/cities', validateSchema(citySchema), cityController.insertCity)

export default citiesRoutes
