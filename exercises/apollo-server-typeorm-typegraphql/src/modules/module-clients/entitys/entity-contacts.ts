
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Field, Int, ObjectType } from 'type-graphql'

// Entitys Relations
import { nc_mb_cli_clients } from './entity-clients';


@ObjectType()
@Entity()
export class nc_mb_cli_contacts extends BaseEntity {

    @Field( () => Int )
    @PrimaryGeneratedColumn()
    contact_id!: number;

    @ManyToOne( type => nc_mb_cli_clients, client => client.fkey_contacts )
    @JoinColumn({ name: "client_id"})
    fkey_clients?: nc_mb_cli_clients

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    created_at!: string;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    updated_at!: string;

    @Field( () => String )
    @Column({ default: '' })
    name?: string;

    @Field( () => String )
    @Column( { default: '' } )
    last_name?: string;

    @Field( () => String )
    @Column( { default: '' } )
    email?: string;

    @Field( () => String )
    @Column( { default: '' })
    phone?: string;

    @Field( () => String )
    @Column( { default: '' } )
    position?: string;

    @Field( () => String )
    @Column( { default: '' } )
    notes?: string;

    @Field( () => String )
    @Column( { default: '' } )
    created_user?: string;

}