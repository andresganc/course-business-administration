
import { Arg, Field, InputType, Int, Mutation, Resolver, Query } from 'type-graphql'

// Entitys
import { nc_mb_cli_contacts } from '../entitys/entity-contacts'


@InputType()
class ContactsInput {

    @Field( () => Number)
    client_id!: number;

    @Field( () => String, { nullable: true })
    name?: string;

    @Field( () => String, { nullable: true })
    last_name?: string;

    @Field( () => String, { nullable: true})
    email?: string;

    @Field( () => String, { nullable: true })
    phone?: string;

    @Field( () => String, { nullable: true })
    position?: string;

    @Field( () => String, { nullable: true })
    notes?: string;

    @Field( () => String, { nullable: true })
    created_user?: string;

}


@InputType()
class ContactsUpdateInput {

    @Field( () => Number, { nullable: true })
    client_id?: number;

    @Field( () => String, { nullable: true })
    name?: string;

    @Field( () => String, { nullable: true })
    last_name?: string;

    @Field( () => String, { nullable: true})
    email?: string;

    @Field( () => String, { nullable: true })
    phone?: string;

    @Field( () => String, { nullable: true })
    position?: string;

    @Field( () => String, { nullable: true })
    notes?: string;

    @Field( () => String, { nullable: true })
    created_user?: string;

}


@Resolver()
export class CliResolverContacts {

    @Mutation( () =>  nc_mb_cli_contacts )
    async cliCreateContact( @Arg('variables', () => ContactsInput ) variables: ContactsInput ) {
       
        const newContact = nc_mb_cli_contacts.create(variables)
        return await newContact.save()

    }

    @Mutation(() => Boolean)
    async cliUpdateContact(
        @Arg("contact_id", () => Int) contact_id: number,
        @Arg("fields", () => ContactsUpdateInput) fields: ContactsUpdateInput
    ) {
        
        await nc_mb_cli_contacts.update({ contact_id }, fields)
        return true

    }

    @Mutation(() => Boolean)
    async cliDeleteContact(@Arg("contact_id", () => Int) contact_id: number) {
        
        await nc_mb_cli_contacts.delete(contact_id)
        return true

    }

    @Query( () => [nc_mb_cli_contacts] )
    async cliQueryContact() {
        
        return await nc_mb_cli_contacts.find()
        
    } 
    
}


