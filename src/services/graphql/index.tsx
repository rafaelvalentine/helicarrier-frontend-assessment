import * as React from "react"
import { ApolloProvider } from "@apollo/client"
import client from "./client"

const ApolloWrapper = function ({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloWrapper
