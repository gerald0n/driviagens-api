import { passengerRepository } from '../repositories/passengerRepository.js'

async function insertPassenger(payload) {
   const result = await passengerRepository.addPassenger(payload)

   return result
}

async function listPassengers(query) {
   if (query) {
      const result = await passengerRepository.listPassengersWithQueryFilter(query)
      return result
   }

   const result = await passengerRepository.listAllPassengers()
   return result
}

export const passengerService = { insertPassenger, listPassengers }
