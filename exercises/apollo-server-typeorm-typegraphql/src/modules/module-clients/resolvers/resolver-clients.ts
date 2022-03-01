
import { Arg, Field, InputType, Int, Mutation, Resolver, Query } from 'type-graphql'

// Entitys
import { nc_mb_cli_clients } from '../entitys/entity-clients'


@InputType()
class ClientsInput {

    @Field( () => Boolean, { defaultValue: false })
    company_people?: boolean;

    @Field( () => String, { nullable: true })
    type_document?: string;

    @Field( () => String, { nullable: true })
    document?: string;

    @Field( () => String, { nullable: true})
    name?: string;

    @Field( () => String, { nullable: true })
    last_name?: string;

    @Field( () => String, { nullable: true })
    email?: string;

    @Field( () => String, { nullable: true })
    phone?: string;

    @Field( () => String, { nullable: true })
    address?: string;

    @Field( () => String, { nullable: true })
    bloq_pta?: string;

    @Field( () => String, { nullable: true })
    state?: string;

    @Field( () => String, { nullable: true })
    city?: string;

    @Field( () => String, { nullable: true })
    country?: string;

    @Field( () => String, { nullable: true })
    cp?: string;

    @Field( () => String, { nullable: true })
    web?: string;

    @Field( () => String, { nullable: true })
    notes?: string;

    @Field( () => String, { nullable: true } )
    created_user?: string

}


@InputType()
class ClientsUpdateInput {

    @Field( () => Boolean, { nullable: true })
    company_people?: boolean;

    @Field( () => String, { nullable: true })
    type_document?: string;

    @Field( () => String, { nullable: true })
    document?: string;

    @Field( () => String, { nullable: true})
    name?: string;

    @Field( () => String, { nullable: true })
    last_name?: string;

    @Field( () => String, { nullable: true })
    email?: string;

    @Field( () => String, { nullable: true })
    phone?: string;

    @Field( () => String, { nullable: true })
    address?: string;

    @Field( () => String, { nullable: true })
    bloq_pta?: string;

    @Field( () => String, { nullable: true })
    state?: string;

    @Field( () => String, { nullable: true })
    city?: string;

    @Field( () => String, { nullable: true })
    country?: string;

    @Field( () => String, { nullable: true })
    cp?: string;

    @Field( () => String, { nullable: true })
    web?: string;

    @Field( () => String, { nullable: true })
    notes?: string;

}


@Resolver()
export class CliResolverClients {

    @Mutation( () => nc_mb_cli_clients )
    async cliCreateClient( @Arg('variables', () => ClientsInput ) variables: ClientsInput ) {
       
        const newClient = nc_mb_cli_clients.create(variables)
        return await newClient.save()

    }

    @Mutation(() => Boolean)
    async cliUpdateClient(
        @Arg("client_id", () => Int) client_id: number,
        @Arg("fields", () => ClientsUpdateInput) fields: ClientsUpdateInput
    ) {
        
        await nc_mb_cli_clients.update({ client_id }, fields)
        return true

    }

    @Mutation(() => Boolean)
    async cliDeleteClient(@Arg("client_id", () => Int) client_id: number) {
        
        await nc_mb_cli_clients.delete(client_id)
        return true

    }

    @Query( () => [nc_mb_cli_clients] )
    async cliQueryClient() {
        
        return await nc_mb_cli_clients.find()
        
    } 
    
}


