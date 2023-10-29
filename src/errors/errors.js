export function notFoundError(entity) {
   return { message: `Esse ${entity} não existe`, name: 'notFound' }
}

export function incompleteDataError(message) {
   return { message, name: 'incompleteData' }
}
