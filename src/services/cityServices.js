import { errors } from '../errors/index.js'
import { cityRepository } from '../repositories/cityRepository.js'

async function addCity(cityName) {
   const city = await cityRepository.checkCityByName(cityName)
   console.log(city)
   if (city.rowCount > 0) throw errors.conflictError('city')

   const result = await cityRepository.addCity(cityName)

   return result
}

export const cityService = { addCity }
