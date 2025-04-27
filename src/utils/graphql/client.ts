import { cacheExchange, createClient, fetchExchange, ssrExchange } from "urql";

const origin = process.env.NODE_ENV === "production" ? "https://production-url.com" : "http://localhost:3000"

const isServerSide = typeof window === "undefined";

const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: `${process.env.NEXT_PUBLIC_DATABASE_URL}/graphql`,
  exchanges: [cacheExchange, ssrCache, fetchExchange],
  fetchOptions: () => {
    return {
      credentials: "include",
      headers: {
        "Origin": origin
      }
    }
  },
})


export { client, ssrCache }
