import Joi from 'joi'
import JoiDate from '@hapi/joi-date'

const formatJoi = Joi.extend(JoiDate)

export const flightSchema = Joi.object({
   origin: Joi.number().integer().required(),
   destination: Joi.number().integer().required(),
   date: formatJoi.date().format('YYYY-MM-DD').required()
})
