import { passengerRepository } from '../repositories/passengerRepository.js'

async function insertPassenger(payload) {
   const result = await passengerRepository.addPassenger(payload)

   return result
}

export const passengerService = { insertPassenger }
