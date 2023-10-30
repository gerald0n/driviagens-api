import httpStatus from 'http-status'

export default function handleErrorMiddleware(error, req, res, next) {
   if (error.type === 'conflict_error') return res.status(httpStatus.CONFLICT).send(error.message)
   if (error.type === 'unprocessable_entity_error')
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
   if (error.type === 'not_found_error') return res.status(httpStatus.NOT_FOUND).send(error.message)

   return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(`Erro desconhecido: ${error.message}`)
}
