import Joi from 'joi'

export const travelSchema = Joi.object({
   passengerId: Joi.number().integer().required(),
   flightId: Joi.number().integer().required()
})
