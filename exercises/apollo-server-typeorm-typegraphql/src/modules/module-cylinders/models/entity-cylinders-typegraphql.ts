
import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm'
import { Field, ObjectType, Int, ID } from 'type-graphql'


@ObjectType()
@Entity()
export class nc_ms_cyl_cylinders_typegraphql extends BaseEntity {

    @Field( () => Int )
    @PrimaryGeneratedColumn()
    cylinder_id!: number;

    /*
    @OneToMany( type => nc_mb_cli_contacts, contacts => contacts.fkey_clients, { eager: true } )
    fkey_contacts?: nc_mb_cli_contacts[]
    */

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    created_at?: string;

    @Field( () => Date )
    @CreateDateColumn({ type: 'timestamp' })
    updated_at?: string;

    @Field( () => String )
    @Column({ default: '' })
    serial?: string;

    @Field( () => Date )
    @Column({ type: 'timestamp' })
    manufacturing_date?: string;

    @Field( () => String )
    @Column({ default: '' })
    manufacturing_number ?: string;
    
    @Field( () => Date )
    @Column({ type: 'timestamp' })
    ph_date?: string;

    @Field( () => String )
    @Column( { default: '' } )
    valve_type?: string;

    @Field( () => String )
    @Column( { default: '' } )
    gas_type?: string;

    @Field( () => String )
    @Column( { default: '' } )
    capacity?: string;

    @Field( () => String )
    @Column( { default: '' } )
    image?: string;

    @Field( () => String )
    @Column( { default: '' } )
    notes?: string;

    @Field( () => String )
    @Column( { default: '' } )
    created_user?: string;

    public get _cylinder_id(): number {
        return this._cylinder_id
    }

    public set _cylinder_id( cylinder_id: number ) {
        this._cylinder_id = cylinder_id
    }

}