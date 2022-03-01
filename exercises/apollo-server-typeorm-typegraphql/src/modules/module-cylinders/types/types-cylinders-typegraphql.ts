
import { Field, InputType } from 'type-graphql'


@InputType()
export class CylinderInput {

    @Field( () => String, { nullable: true} )
    serial?: string;

    @Field( () => Date, { nullable: true} )
    manufacturing_date?: string;

    @Field( () => String, { nullable: true})
    manufacturing_number?: string;

    @Field( () => Date, { nullable: true })
    ph_date?: string;

    @Field( () => String, { nullable: true })
    valve_type?: string;

    @Field( () => String, { nullable: true } )
    gas_type?: string;

    @Field( () => String, { nullable: true } )
    capacity?: string;

    @Field( () => String, { nullable: true })
    image?: string;

    @Field( () => String, { nullable: true })
    notes?: string;

    @Field( () => String, { nullable: true })
    created_user?: string;

}

@InputType()
export class CylinderUpdateInput {

    @Field( () => String, { nullable: true})
    serial?: string;

    @Field( () => String, { nullable: true})
    manufacturing_date?: string;

    @Field( () => String, { nullable: true})
    manufacturing_number?: string;

    @Field( () => String, { nullable: true })
    ph_date?: string;

    @Field( () => String, { nullable: true })
    valve_type?: string;

    @Field( () => String, { nullable: true})
    gas_type?: string;

    @Field( () => String, { nullable: true})
    capacity?: string;

    @Field( () => String, { nullable: true })
    image?: string;

    @Field( () => String, { nullable: true })
    notes?: string;

    @Field( () => String, { nullable: true })
    created_user?: string;

}