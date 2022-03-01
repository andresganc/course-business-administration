
import { Arg, Field, InputType, Int, Mutation, Resolver, Query, Float } from 'type-graphql'

// Entitys
import { nc_ms_cyl_cylinder_fill } from '../models/entity-cylinder-fill'


@InputType()
class CylinderFillInput {

    @Field( () => Int )
    psi!: number;

    @Field( () => Float )
    loaded!: number;

    @Field( () => String, { nullable: true })
    notes?: string;

    @Field( () => String, { nullable: true })
    created_user?: string;

}

@InputType()
class CylinderFillUpdateInput {

    @Field( () => Int, { nullable: true } )
    psi?: number;

    @Field( () => Float, { nullable: true } )
    loaded?: number;

    @Field( () => String, { nullable: true })
    notes?: string;

    @Field( () => String, { nullable: true })
    created_user?: string;

}


@Resolver()
export class CylResolverCylinderFill {

    @Mutation( () => nc_ms_cyl_cylinder_fill )
    async cylCreateCylinderFill( @Arg('variables', () => CylinderFillInput ) variables: CylinderFillInput ) {
       
        const newFill = nc_ms_cyl_cylinder_fill.create(variables)
        return await newFill.save()

    }

    @Mutation(() => Boolean)
    async cylUpdateCylinderFill(
        @Arg("fill_id", () => Int) fill_id: number,
        @Arg("fields", () => CylinderFillUpdateInput) fields: CylinderFillUpdateInput
    ) {
        
        await nc_ms_cyl_cylinder_fill.update({ fill_id }, fields)
        return true

    }

    @Mutation(() => Boolean)
    async cylDeleteCylinderFill(@Arg("fill_id", () => Int) fill_id: number) {
        
        await nc_ms_cyl_cylinder_fill.delete(fill_id)
        return true

    }

    @Query( () => [nc_ms_cyl_cylinder_fill] )
    async cylQueryCylinderFill() {
        
        return await nc_ms_cyl_cylinder_fill.find()
        
    } 
    
}

