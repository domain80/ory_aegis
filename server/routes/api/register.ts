import { FrontendApiFactory } from "@ory/kratos-client"

const kratosUrl = 'http://kratos:4433/'
const kratos = FrontendApiFactory(undefined, kratosUrl)

export default defineEventHandler(async (event) => {
  const res = await kratos.createBrowserRegistrationFlow()
  console.log({ res })
  return res.data
})

