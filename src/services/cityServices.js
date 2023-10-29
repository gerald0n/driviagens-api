import { cityRepository } from '../repositories/cityRepository.js'

async function addCity(cityName) {
   const city = await cityRepository.checkCityByName(cityName)

  //  if (city.rowCount > 0) throw { type: 'Conflict', message: 'Essa cidade já foi cadastrada!' }

   const result = await cityRepository.addCity(cityName)

  //  if (!result)
  //     throw { type: 'Internal Server Error', message: 'Algo deu errado. Tente novamente!' }

   return result
}

export const cityService = { addCity }
