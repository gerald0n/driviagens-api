import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
dayjs.extend(customParseFormat)
import { flightRepository } from '../repositories/flightRepository.js'
import { errors } from '../errors/index.js'
import { cityRepository } from '../repositories/cityRepository.js'

async function insertNewFlight(payload) {
   const { origin, destination, date } = payload

   if (origin === destination) throw errors.conflictError()

   const currentDate = dayjs()
   const formattedDate = dayjs(date, 'DD-MM-YYYY')

   if (!(formattedDate > currentDate)) throw errors.unprocessableEntityError('date')

   const cityOfOrigin = await cityRepository.checkCityByID(origin)
   const destinationCity = await cityRepository.checkCityByID(destination)

   if(cityOfOrigin.rowCount === 0 || destinationCity.rowCount === 0)
      throw errors.notFoundError() 

   // conferir se origin existe na table cities
   // conferir se destination existe na table cities

   const result = await flightRepository.addFlight(payload)

   return result
}

export const flightService = { insertNewFlight }
