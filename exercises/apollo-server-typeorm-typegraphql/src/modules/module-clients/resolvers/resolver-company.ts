
import { Arg, Field, InputType, Int, Mutation, Resolver, Query } from 'type-graphql'

// Entitys
import { nc_mb_cli_company } from '../entitys/entity-company'


@InputType()
class CompanyInput {

    @Field( () => Number)
    client_id!: number;

    @Field( () => String, { nullable: true })
    industry_id?: string;

    @Field( () => String, { nullable: true })
    sizes?: string;

    @Field( () => String, { nullable: true})
    currency?: string;

    @Field( () => String, { nullable: true })
    notes?: string;

    @Field( () => String, { nullable: true })
    private_notes?: string;

    @Field( () => String, { nullable: true })
    create_usert?: string;

}


@InputType()
class CompanyUpdateInput {

    @Field( () => Number, { nullable: true })
    client_id?: number;

    @Field( () => String, { nullable: true })
    industry_id?: string;

    @Field( () => String, { nullable: true })
    sizes?: string;

    @Field( () => String, { nullable: true})
    currency?: string;

    @Field( () => String, { nullable: true })
    notes?: string;

    @Field( () => String, { nullable: true })
    private_notes?: string;

    @Field( () => String, { nullable: true })
    create_usert?: string;

}


@Resolver()
export class CliResolverCompany {

    @Mutation( () =>  nc_mb_cli_company )
    async cliCreateCompany( @Arg('variables', () => CompanyInput ) variables: CompanyInput ) {
       
        const newCompany = nc_mb_cli_company.create(variables)
        return await newCompany.save()

    }

    @Mutation(() => Boolean)
    async cliUpdateCompany(
        @Arg("company_id", () => Int) company_id: number,
        @Arg("fields", () => CompanyUpdateInput) fields: CompanyUpdateInput
    ) {
        
        await nc_mb_cli_company.update({ company_id }, fields)
        return true

    }

    @Mutation(() => Boolean)
    async cliDeleteCompany(@Arg("company_id", () => Int) company_id: number) {
        
        await nc_mb_cli_company.delete(company_id)
        return true

    }

    @Query( () => [nc_mb_cli_company] )
    async cliQueryCompany() {
        
        return await nc_mb_cli_company.find()
        
    } 
    
}


