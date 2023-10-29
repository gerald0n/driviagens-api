import { passengerRepository } from '../repositories/passengerRepository.js'

async function insertNewPassenger(payload) {
   return await passengerRepository.addPassenger(payload)
}

export const passengerService = { insertNewPassenger }
