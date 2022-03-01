
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Field, Int, ObjectType } from 'type-graphql'
import { nc_mb_cli_clients } from './entity-clients';

@ObjectType()
@Entity()
export class nc_mb_cli_company extends BaseEntity {

    @Field( () => Int )
    @PrimaryGeneratedColumn()
    company_id!: number;

    @OneToOne( type => nc_mb_cli_clients )
    @JoinColumn({ name: 'client_id' })
    fk_clients?: nc_mb_cli_clients

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    created_at!: string;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    updated_at!: string;

    @Field( () => String )
    @Column( { default: '' } )
    industry_id?: string;

    @Field( () => String )
    @Column( { default: '' } )
    sizes?: string

    @Field( () => String )
    @Column( { default: '' } )
    currency?: string;

    @Field( () => String )
    @Column( { default: '' } )
    notes?: string;

    @Field( () => String )
    @Column( { default: '' } )
    private_notes?: string;

    @Field( () => String )
    @Column( { default: '' } )
    created_user?: string;

}