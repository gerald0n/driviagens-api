import db from '../database/connection-db.js'

function addPassenger({ firstName, lastName }) {
   return db.query(
      `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2) RETURNING id`,
      [firstName, lastName]
   )
}

async function checkPassengerById(id) {
   const result = await db.query(`SELECT * FROM passengers WHERE id = $1`, [id])
   return result
}

export const passengerRepository = { addPassenger, checkPassengerById }
