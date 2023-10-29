export default function handleErrorMiddleware(error, req, res, next) {
   /* if (error.type === "error_...") return res.sendStatus(...); */

   return res.sendStatus(500)
}
