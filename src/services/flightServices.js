import dayjs from 'dayjs'
import { flightRepository } from '../repositories/flightRepository.js'

async function insertNewFlight(payload) {
   const { origin, destination, date } = payload

   /* if(origin === destination) throw CONFLICT */

   const currentDate = dayjs().format('DD-MM-YYYY')

   /* if(!dayjs(date).isAfter(currentDate)) throw */
   console.log('DATA: ' + !dayjs(date).isAfter(currentDate))

   // conferir se origin existe na table cities
   // conferir se destination existe na table cities

   const result = await flightRepository.addFlight(payload)

   return result
}

export const flightService = { insertNewFlight }
