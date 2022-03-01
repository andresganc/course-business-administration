
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn } from 'typeorm'
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class nc_mb_user_roles extends BaseEntity {

    @Field( () => Int )
    @PrimaryGeneratedColumn()
    roles_id!: number;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    created_at!: string;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    updated_at!: string;

    @Field( () => Int )
    @Column()
    user_id!: number;

}