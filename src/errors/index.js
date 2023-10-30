import dayjs from 'dayjs'

function conflictError(entity) {
   if (entity) {
      return {
         type: 'conflict_error',
         message:
            'Ocorreu um erro, pois a cidade informada já existe em nosso banco de dados. Tente novamente!'
      }
   }

   return {
      type: 'conflict_error',
      message:
         'Os dados "origin" e "destination" são conflitantes, pois não podem ser iguais. Tente novamente!'
   }
}

function unprocessableEntityError(entity) {
   if (entity) {
      const date = dayjs().format('DD-MM-YYYY')
      return {
         type: 'unprocessable_entity_error',
         message: `Ocorreu um erro, pois a data informada não pode ser inferior a data de hoje: ${date}`
      }
   }
   return {
      type: 'unprocessable_entity_error',
      message:
         'O formato dos dados inseridos está incorreto, não sendo possível processá-los. Tente novamente!'
   }
}

function notFoundError() {
   return {
      type: 'not_found_error',
      message: 'Ocorreu um erro, pois um ou mais dados informados não existem. Tente novamente!'
   }
}

export const errors = { conflictError, unprocessableEntityError, notFoundError }
