
import { GraphQLSchema, GraphQLObjectType } from 'graphql'

// Queries

// Mutations
//Schemas
import { CylCylinders } from './module-cylinders/resolvers/resolver-cylinders'


const RootQuerys = new GraphQLObjectType({
    name: "Querys",
    fields: {
        CylCylinders,
    }
})

const RootMutations = new GraphQLObjectType({
    name: "Mutations",
    fields: {
        CylCylinders
    }
})

export const schema = new GraphQLSchema({
    query: RootQuerys,
    mutation: RootMutations
})

