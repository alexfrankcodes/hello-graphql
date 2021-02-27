import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello GraphQL world!👋",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: 5000 })
  .then(({ url }) => console.log(`Server running at ${url}`));
