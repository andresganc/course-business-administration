
import { Arg, Field, InputType, Int, Mutation, Resolver, Query, Float } from 'type-graphql'

// Entitys
import { nc_ms_cyl_cylinder_movement } from '../models/entity-cylinder-movement'


@InputType()
class CylinderMovementInput {

    @Field( () => Int )
    remission!: number;

    @Field( () => String )
    remission_date!: string;

    @Field( () => String, { nullable: true })
    adviser?: string;

    @Field( () => String, { nullable: true })
    zone?: string;

    @Field( () => String, { nullable: true })
    notes?: string;

    @Field( () => String, { nullable: true })
    created_user?: string;

}


@InputType()
class CylinderMovementUpdateInput {

    @Field( () => Int, { nullable: true } )
    remission?: number;

    @Field( () => String, { nullable: true } )
    remission_date?: string;

    @Field( () => String, { nullable: true })
    adviser?: string;

    @Field( () => String, { nullable: true })
    zone?: string;

    @Field( () => String, { nullable: true })
    notes?: string;

    @Field( () => String, { nullable: true })
    created_user?: string;

}


@Resolver()
export class CylResolverCylinderMovement {

    @Mutation( () => nc_ms_cyl_cylinder_movement )
    async cylCreateCylinderMovement( @Arg('variables', () => CylinderMovementInput ) variables: CylinderMovementInput ) {
       
        const newFill = nc_ms_cyl_cylinder_movement.create(variables)
        return await newFill.save()

    }

    @Mutation(() => Boolean)
    async cylUpdateCylinderMovement(
        @Arg("cylinder_movement_id", () => Int) cylinder_movement_id: number,
        @Arg("fields", () => CylinderMovementUpdateInput ) fields: CylinderMovementUpdateInput
    ) {
        
        await nc_ms_cyl_cylinder_movement.update({ cylinder_movement_id }, fields)
        return true

    }

    @Mutation(() => Boolean)
    async cylDeleteCylinderMovement(@Arg("cylinder_movement_id", () => Int) cylinder_movement_id: number) {
        
        await nc_ms_cyl_cylinder_movement.delete(cylinder_movement_id)
        return true

    }

    @Query( () => [nc_ms_cyl_cylinder_movement] )
    async cylQueryCylinderMovement() {
        
        return await nc_ms_cyl_cylinder_movement.find()
        
    } 
    
}


