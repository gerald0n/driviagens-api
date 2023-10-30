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

function listFlights(origin, destination) {
   const initialQuery = `
   SELECT f.id, co.name AS origin, cd.name AS destination, TO_CHAR(f.date, 'DD-MM-YYYY') AS date
      FROM flights f
      JOIN cities co
      ON co.id = f.origin
      JOIN cities cd
      ON cd.id = f.destination

   `
   const finalQuery = ` 
      ORDER BY f.date ASC;
   `

   let filteringQuery = ''
   const arrayValues = []

   if (origin) {
      filteringQuery += `WHERE co.name = $1`
      arrayValues.push(origin)
   }

   if (destination) {
      filteringQuery += filteringQuery
         ? ` AND cd.name = $${arrayValues.length + 1}`
         : ` WHERE cd.name = $${arrayValues.length + 1}`
      arrayValues.push(destination)
   }

   return db.query(initialQuery + filteringQuery + finalQuery, arrayValues)
}

export const flightRepository = { addFlight, checkFlightById, listFlights }
