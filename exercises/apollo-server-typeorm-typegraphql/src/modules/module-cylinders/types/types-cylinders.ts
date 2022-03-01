
import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

export const typeCylinders =  new GraphQLObjectType({
    name: 'typeCylinders',
    fields: {
        cylinder_id: { type: GraphQLID },
        created_at: { type: GraphQLString },
        update_at: { type: GraphQLString },
        serial: { type: GraphQLString },
        manufacturing_date: { type: GraphQLString },
        manufacturing_number: { type: GraphQLString },
        ph_date: { type: GraphQLString },
        valve_type: { type: GraphQLString },
        gas_type: { type: GraphQLString },
        capacity: { type: GraphQLString },
        image: { type: GraphQLString },
        notes: { type: GraphQLString },
        created_user: { type: GraphQLString }
    }
})