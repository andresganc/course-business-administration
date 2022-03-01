
import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, Column } from 'typeorm'
import { Field, ObjectType, Int, Float } from 'type-graphql'


@ObjectType()
@Entity()
export class nc_ms_cyl_cylinder_fill extends BaseEntity {

    @Field( () => Int )
    @PrimaryGeneratedColumn()
    fill_id!: number;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    created_at!: string;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    updated_at!: string;

    @Field( () => Int )
    @Column({ default: 0 })
    psi!: number;

    @Field( () => Float )
    @Column({ default: 0 })
    loaded!: number;

    @Field( () => String )
    @Column( { default: '' } )
    notes?: string;

    @Field( () => String )
    @Column( { default: '' } )
    created_user?: string;

}
