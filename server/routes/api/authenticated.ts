import { defineEventHandler, handleCors } from "#imports"

export default defineEventHandler(async (event) => {
  console.log(event._requestBody)
  handleCors(event, {
    allowHeaders: ['*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    origin: '*',
    credentials: true
  })
  return event._requestBody
})
