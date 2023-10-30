import { passengerRepository } from '../repositories/passengerRepository.js'

async function insertPassenger(payload) {
   const result = await passengerRepository.addPassenger(payload)
   return result
}

async function listPassengers(query) {
   const result = await passengerRepository.listPassengers(query)
   return result
}

export const passengerService = { insertPassenger, listPassengers }
