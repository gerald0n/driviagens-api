import { travelRepository } from "../repositories/travelRepository.js"

async function insertNewTravel(payload) {

  //pegar passengerID
  //pegar flightID

  //if(!passengerId || !fligthId) throw

  const result = await travelRepository.addTravel(payload)

  return result
}

export const travelService = { insertNewTravel }