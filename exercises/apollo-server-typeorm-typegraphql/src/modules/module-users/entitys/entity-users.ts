
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn } from 'typeorm'
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class nc_mb_user_users extends BaseEntity {

    @Field( () => Int )
    @PrimaryGeneratedColumn()
    user_id!: number;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    created_at!: string;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    updated_at!: string;

    @Field( () => String )
    @Column( { default: '' } )
    id_client_nc?: string;

    @Field( () => String )
    @Column()
    email!: string;

    @Field( () => String )
    @Column()
    password!: string;

    @Field( () => String )
    @Column( { default: '' } )
    name?: string;

    @Field( () => String )
    @Column( { default: '' } )
    last_name?: string

    @Field( () => String )
    @Column( { default: '' } )
    photo_url?: string;

    @Field( () => String )
    @Column( { default: '' } )
    phone?: string;

    @Field( () => Boolean )
    @Column( "boolean", { default: false } )
    root?: boolean;

    @Field( () => String )
    @Column( { default: '' } )
    activation_key?: string;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    last_used_at?: string

    @Field( () => String )
    @Column( { default: '' } )
    created_user?: string;

    @Field( () => Boolean )
    @Column( "boolean", { default: true } )
    status?: boolean;

}