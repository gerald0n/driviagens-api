import db from "../database/connection-db.js";

function addCity(cityName) {
  return db.query(`INSERT INTO cities (name) VALUES ($1) RETURNING id`, [cityName])
}

function checkCityByName(cityName) {
  return db.query(`SELECT * FROM cities WHERE name = $1`, [cityName])
}

export const cityRepository = { addCity, checkCityByName }