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

function listPassengersWithQueryFilter(query) {
   if (query) {
      return db.query(
         `
      SELECT CONCAT(p."firstName", ' ', p."lastName") as passenger, COUNT(t."flightId") as travels 
         FROM passengers p
         LEFT JOIN travels t
         ON t."passengerId" = p.id
         WHERE CONCAT(p."firstName", ' ', p."lastName") ILIKE $1
         GROUP BY passenger
         ORDER BY travels DESC`,
         [`%${query}%`]
      )
   }
}

function listAllPassengers() {
   return db.query(`
   SELECT CONCAT(p."firstName", ' ', p."lastName") as passenger, COUNT(t."flightId") as travels 
      FROM passengers p
      LEFT JOIN travels t
      ON t."passengerId" = p.id
      GROUP BY passenger
      ORDER BY travels DESC
   `)
}

export const passengerRepository = {
   addPassenger,
   checkPassengerById,
   listPassengersWithQueryFilter,
   listAllPassengers
}
