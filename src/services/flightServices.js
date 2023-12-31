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

   if (cityOfOrigin.rowCount === 0 || destinationCity.rowCount === 0) throw errors.notFoundError()

   const result = await flightRepository.addFlight({
      ...payload,
      date: formattedDate.format('DD-MM-YYYY')
   })

   return result
}

async function listFlights(origin, destination) {
   const result = await flightRepository.listFlights(origin, destination)
   return result
}

export const flightService = { insertNewFlight, listFlights }
