import { errors } from '../errors/index.js'
import { flightRepository } from '../repositories/flightRepository.js'
import { passengerRepository } from '../repositories/passengerRepository.js'
import { travelRepository } from '../repositories/travelRepository.js'

async function insertNewTravel(payload) {
   const { passengerId, flightId } = payload

   const passenger = await passengerRepository.checkPassengerById(passengerId)
   const flight = await flightRepository.checkFlightById(flightId)

   if (passenger.rowCount === 0 || flight.rowCount === 0) throw errors.notFoundError()

   const result = await travelRepository.addTravel(payload)

   return result
}

export const travelService = { insertNewTravel }
