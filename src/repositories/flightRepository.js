import db from '../database/connection-db.js'

function addFlight({ origin, destination, date }) {
   return db.query(
      `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING id`,
      [origin, destination, date]
   )
}

async function checkFlightById(id) {
   const result = await db.query(`SELECT * FROM flights WHERE id = $1`, [id])
   return result
}

function listFlights(origin, destination) {}

export const flightRepository = { addFlight, checkFlightById, listFlights }
