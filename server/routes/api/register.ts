import { defineEventHandler, sendRedirect, setHeader } from "#imports";

const baseUrl = "http://kratos:4433";
const registrationUrl = new URL("/self-service/registration/browser", baseUrl);

export default defineEventHandler(async (event) => {
  // request browser registration flow and follow redirects using $fetch
  return $fetch(registrationUrl.toString(), {
    redirect: "manual",
    credentials: "include",
    headers: {
      Accept: "text/html",
    },
    onResponse({ response }) {
      console.info({ response })
      setHeader(event, "Cookie", response.headers.getSetCookie())

      // redirect with headers
      if (response.status === 302 || response.status === 303) {
        setHeader(event, "Location", response.headers.get("Location")!)
        return sendRedirect(event, response.headers.get("Location")!)
      }
    }
  })


  // await ory.createBrowserRegistrationFlow({}, {
  //   headers: { Accept: "text/html", },
  // })
  // if res status is redirect do redirect
  // if (res.status === 302 || res.status === 303) {
  //   // set cookies
  //   for (const cookie of res.headers["set-cookie"] || []) {
  //     appendHeader(event, "Set-Cookie", cookie)
  //   }
  //   return sendRedirect(event, res.headers.location!)
  // }


  // return res.data
})
