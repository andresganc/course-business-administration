
import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, Column } from 'typeorm'
import { Field, ObjectType, Int, Float } from 'type-graphql'


@ObjectType()
@Entity()
export class nc_ms_cyl_cylinder_movement extends BaseEntity {

    @Field( () => Int )
    @PrimaryGeneratedColumn()
    cylinder_movement_id!: number;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    created_at!: string;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    updated_at!: string;

    @Field( () => Int )
    @Column({ default: 0 })
    remission!: number;

    @Field( () => Date )
    @Column({ type: 'timestamp' })
    remission_date!: string;

    @Field( () => String )
    @Column( { default: '' } )
    adviser?: string;

    @Field( () => String )
    @Column( { default: '' } )
    zone?: string;

    @Field( () => String )
    @Column( { default: '' } )
    notes?: string;

    @Field( () => String )
    @Column( { default: '' } )
    created_user?: string;

}