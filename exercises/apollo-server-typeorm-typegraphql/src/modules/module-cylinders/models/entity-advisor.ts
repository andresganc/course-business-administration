
import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, Column } from 'typeorm'
import { Field, ObjectType, Int } from 'type-graphql'


@ObjectType()
@Entity()
export class nc_ms_cyl_advisor extends BaseEntity {

    @Field( () => Int )
    @PrimaryGeneratedColumn()
    advisor_id!: number;

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
    last_name?: string;

    @Field( () => String )
    @Column( { default: '' } )
    type_document?: string;

    @Field( () => String )
    @Column( { default: '' } )
    document?: string;

    @Field( () => String )
    @Column( { default: '' } )
    phone?: string;

    @Field( () => String )
    @Column( { default: '' } )
    email?: string;

    @Field( () => String )
    @Column( { default: '' } )
    image?: string;

    @Field( () => String )
    @Column( { default: '' } )
    notes?: string;

    @Field( () => String )
    @Column( { default: '' } )
    created_user?: string;

}