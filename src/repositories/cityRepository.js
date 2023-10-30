import db from "../database/connection-db.js";

function addCity(cityName) {
  return db.query(`INSERT INTO cities (name) VALUES ($1) RETURNING id`, [cityName])
}

function checkCityByName(cityName) {
  return db.query(`SELECT name FROM cities WHERE name = $1`, [cityName])
}

async function checkCityByID(cityId) {
  const result = db.query(`SELECT name FROM cities WHERE id = $1`, [cityId])

  return result
}

export const cityRepository = { addCity, checkCityByName, checkCityByID }