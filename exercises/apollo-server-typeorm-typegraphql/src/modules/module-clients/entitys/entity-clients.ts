
import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm'
import { Field, ObjectType, Int } from 'type-graphql'

// Entitys Relations
import { nc_mb_cli_contacts } from './entity-contacts';


@ObjectType()
@Entity()
export class nc_mb_cli_clients extends BaseEntity {

    @Field( () => Int )
    @PrimaryGeneratedColumn()
    client_id!: number;

    @OneToMany( type => nc_mb_cli_contacts, contacts => contacts.fkey_clients, { eager: true } )
    fkey_contacts?: nc_mb_cli_contacts[]

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    created_at!: string;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    updated_at!: string;

    @Field( () => Boolean )
    @Column( "boolean", { default: false } )
    company_people?: boolean;
    
    @Field( () => String )
    @Column({ default: '' })
    type_document?: string;

    @Field( () => String )
    @Column( { default: '' } )
    document?: string;

    @Field( () => String )
    @Column( { default: '' } )
    name?: string;

    @Field( () => String )
    @Column( { default: '' } )
    last_name?: string;

    @Field( () => String )
    @Column( { default: '' } )
    email?: string;

    @Field( () => String )
    @Column( { default: '' } )
    phone?: string;

    @Field( () => String )
    @Column( { default: '' } )
    address?: string;

    @Field( () => String )
    @Column( { default: '' } )
    bloq_pta?: string;

    @Field( () => String )
    @Column( { default: '' } )
    state?: string;

    @Field( () => String )
    @Column( { default: '' } )
    city?: string;

    @Field( () => String )
    @Column( { default: '' } )
    country?: string;

    @Field( () => String )
    @Column( { default: '' } )
    cp?: string;

    @Field( () => String )
    @Column( { default: '' } )
    web?: string;

    @Field( () => String )
    @Column( { default: '' } )
    notes?: string;

    @Field( () => String )
    @Column( { default: '' } )
    created_user?: string;

}