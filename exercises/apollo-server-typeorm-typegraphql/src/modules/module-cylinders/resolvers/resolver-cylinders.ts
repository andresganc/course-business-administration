
import { GraphQLString } from 'graphql'

// Entities
import { nc_ms_cyl_cylinders } from '../models/entity-cylinders'

// Types
import { typeCylinders } from '../types/types-cylinders'

export const CylCylinders = {
    
    type: typeCylinders,
    args: {
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
    },
    async resolve(_: any, args: any) {

        const { serial, manufacturing_date, manufacturing_number, ph_date, valve_type, gas_type, capacity, image, notes, created_user } = args;
        
        const result = await nc_ms_cyl_cylinders.insert({
            serial,
            manufacturing_date,
            manufacturing_number,
            ph_date,
            valve_type,
            gas_type,
            capacity,
            image,
            notes,
            created_user,
        })
        return {...args, id: result.identifiers[0].cylinder_id }
    }
}