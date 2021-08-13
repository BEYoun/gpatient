import { withApollo as createWithApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";

const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: 'https://server.goodoc.co/graphql',
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) || "",
      },
    cache: new InMemoryCache()
  });

export const withApollo = createWithApollo(createClient);
