import db from '../database/connection-db.js'

function addFlight({ origin, destination, date }) {
   return db.query(
      `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING id`,
      [origin, destination, date]
   )
}

export const flightRepository = { addFlight }
