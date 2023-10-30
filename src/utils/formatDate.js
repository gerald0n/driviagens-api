export function formatDate(dateString) {
   const dateParts = dateString.split('-')

   const year = parseInt(dateParts[2], 10)
   const month = parseInt(dateParts[1], 10) - 1
   const day = parseInt(dateParts[0], 10)

   const date = new Date(year, month, day)
   const formattedDate = date.toISOString().split('T')[0]

   return formattedDate
}
