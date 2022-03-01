
import { Entity, Column, PrimaryColumn, BaseEntity, CreateDateColumn } from 'typeorm'
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class nc_mb_user_password_resets extends BaseEntity {

    @Field( () => String )
    @PrimaryColumn()
    email!: string;

    @Field( () => String )
    @Column()
    token?: string;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    created_at!: string;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    updated_at!: string;

}