import db from "../database/connection-db.js";

function addTravel({passengerId, flightId}) {

  return db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2) RETURNING id`, [passengerId, flightId])
}

export const travelRepository = { addTravel }