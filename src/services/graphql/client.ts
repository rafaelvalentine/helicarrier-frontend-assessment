/* eslint-disable object-curly-newline */
import { ApolloClient, HttpOptions, DocumentNode, InMemoryCache } from "@apollo/client"
import { createUploadLink } from "apollo-upload-client"
import { GRAPHQL_API_URL } from "../../config"

type Query = <QV, RT>(name: string, query: DocumentNode, variables?: QV) => Promise<RT>
type Mutate = <MV, RT>(name: string, mutation: DocumentNode, variables?: MV) => Promise<RT>

const createLink = (opts: HttpOptions = {}) => {
  return createUploadLink({ uri: GRAPHQL_API_URL, ...opts })
}

// Cache implementation
const cache = new InMemoryCache({})

// Create the apollo client
const apolloClient = new ApolloClient({
  cache,
  link: createLink(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
    },
    mutate: {
      fetchPolicy: "no-cache",
    },
  },
})

// eslint-disable-next-line no-return-assign
export const setAuthToken = (token?: string): void => {
  const options: HttpOptions = { headers: { Authorization: token ? `Bearer ${token}` : null } }

  apolloClient.setLink(createLink(options))
}

// eslint-disable-next-line no-shadow, @typescript-eslint/no-shadow
const query: Query = (name, query, variables) => {
  return apolloClient
    .query({
      query, // eslint-disable-line no-shadow
      variables,
      fetchPolicy: "no-cache",
    })
    .then(({ data }) => data[name])
}

const mutate: Mutate = (name, mutation, variables) => {
  return apolloClient
    .mutate({
      mutation,
      variables,
    })
    .then(({ data }) => data[name])
}

export { query, mutate }

export default apolloClient
