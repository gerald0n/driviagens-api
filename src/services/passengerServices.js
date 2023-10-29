import { passengerRepository } from '../repositories/passengerRepository.js'

async function insertPassenger(payload) {
   const result = await passengerRepository.addPassenger(payload)

   // if (!result) throw { type: 'Not found', message: 'teste' }

   return result
}

export const passengerService = { insertPassenger }
