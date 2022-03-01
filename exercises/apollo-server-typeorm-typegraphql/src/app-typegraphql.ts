
import express from "express"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"

// Resolvers Bars

// Resolver CoffeeShops

// Resolvers Cylinders
import { CylResolverCylindersTypeGraphQL } from './modules/module-cylinders/resolvers/resolver-cylinders-typegraphql'
import { CylResolverCylinderFill } from './modules/module-cylinders/resolvers/resolver-cylinder-fill'
import { CylResolverCylinderMovement } from './modules/module-cylinders/resolvers/resolver-cylinder-movement'

// Resolvers Hotel

// Resolvers Restaurants

// Resolvers Stores

// Resolvers Tests
import { TestPingResolver } from "./tests/ping"

export async function startServer() {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        CylResolverCylindersTypeGraphQL, CylResolverCylinderFill, CylResolverCylinderMovement,
        TestPingResolver, 
       ],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });

  await server.start()
  server.applyMiddleware({app, path: '/graphql'})

  return app;
}


