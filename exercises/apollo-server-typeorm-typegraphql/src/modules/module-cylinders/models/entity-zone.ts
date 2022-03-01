
import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, Column } from 'typeorm'
import { Field, ObjectType, Int } from 'type-graphql'


@ObjectType()
@Entity()
export class nc_ms_cyl_zone extends BaseEntity {

    @Field( () => Int )
    @PrimaryGeneratedColumn()
    zone_id!: number;

    @Field( () => String )
    @CreateDateColumn({ type: 'timestamp' })
    created_at!: string;

    @Field( () => String )
    @CreateDateColumn({ type: 'timestamp' })
    updated_at!: string;

    @Field( () => String )
    @Column({ default: '' })
    zone!: string;

    @Field( () => String )
    @Column( { default: '' } )
    areas_influence?: string;

    @Field( () => String )
    @Column( { default: '' } )
    notes?: string;

    @Field( () => String )
    @Column( { default: '' } )
    created_user?: string;

}