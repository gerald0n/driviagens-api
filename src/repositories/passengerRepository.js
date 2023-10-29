import db from '../database/connection-db.js'

function addPassenger({ firstName, lastName }) {
   return db.query(
      `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2) RETURNING id`,
      [firstName, lastName]
   )
}

export const passengerRepository = { addPassenger }
