
import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, Column } from 'typeorm'
import { Field, ObjectType, Int } from 'type-graphql'


@ObjectType()
@Entity()
export class nc_ms_cyl_gas_type extends BaseEntity {

    @Field( () => Int )
    @PrimaryGeneratedColumn()
    gas_type_id!: number;

    @Field( () => String )
    @CreateDateColumn({ type: 'timestamp' })
    created_at!: string;

    @Field( () => String )
    @CreateDateColumn({ type: 'timestamp' })
    updated_at!: string;

    @Field( () => String )
    @Column({ default: '' })
    name!: string;

    @Field( () => String )
    @Column( { default: '' } )
    chemical_formula?: string;

    @Field( () => String )
    @Column( { default: '' } )
    notes?: string;

    @Field( () => String )
    @Column( { default: '' } )
    created_user?: string;

}