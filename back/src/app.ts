import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { TypeResolver } from "./resolvers/typesResolver";
import { EmployeesResolver } from "./resolvers/EmployeesResolver";

export async function startServer() {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TypeResolver,EmployeesResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}
