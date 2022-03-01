
import { Arg, Int, Mutation, Resolver, Query, ID } from 'type-graphql'

// Types Defs
import { CylinderInput, CylinderUpdateInput } from '../types/types-cylinders-typegraphql'

// Entitys
import { nc_ms_cyl_cylinders_typegraphql } from '../models/entity-cylinders-typegraphql'


@Resolver()
export class CylResolverCylindersTypeGraphQL {

    @Mutation( () => nc_ms_cyl_cylinders_typegraphql )
    async cylCreateCylinders(@Arg('variables', () => CylinderInput ) variables: CylinderInput ) {
       
        const newCylinder = nc_ms_cyl_cylinders_typegraphql.create(variables)
        return await newCylinder.save()

    }

    @Mutation(() => Boolean)
    async cylUpdateCylinders(
        @Arg("cylinder_id", () => Int) cylinder_id: number,
        @Arg("fields", () => CylinderUpdateInput) fields: CylinderUpdateInput
    ) {
        
        await nc_ms_cyl_cylinders_typegraphql.update({ cylinder_id }, fields)
        return true

    }

    @Mutation(() => Boolean)
    async cylDeleteCylinders(@Arg("cylinder_id", () => Int) cylinder_id: number) {
        
        await nc_ms_cyl_cylinders_typegraphql.delete(cylinder_id)
        return true

    }

    @Query( () => [nc_ms_cyl_cylinders_typegraphql] )
    async cylQueryCylinders() {
        
        return await nc_ms_cyl_cylinders_typegraphql.find()
        
    } 

    @Query( () => [nc_ms_cyl_cylinders_typegraphql] )
    async cylQueryCylindersID(@Arg("cylinderId", () => Int) cylinder_id: number) {
        const queryID = await nc_ms_cyl_cylinders_typegraphql.findOne( cylinder_id )
         return queryID
    }
    
}





