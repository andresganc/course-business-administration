
import { Resolver, Mutation, Arg, Int, Query, InputType, Field } from 'type-graphql'
import { nc_mb_user_users } from '../entitys/entity-users'


@InputType()
class UsersInput {

    @Field( () => String, { nullable: true } )
    id_client_nc?: string

    @Field()
    email!: string

    @Field()
    password!: string

    @Field( () => String, { nullable: true } )
    name?: string

    @Field( () => String, { nullable: true } )
    last_name?: string

    @Field( () => String, { nullable: true } )
    photo_url?: string

    @Field( () => String, { nullable: true } )
    phone?: string

    @Field( () => Boolean, { nullable: true } )
    root?: boolean

    @Field( () => String, { nullable: true } )
    activation_key?: string

    @Field( () => String, { nullable: true } )
    last_used_at?: string

    @Field( () => Boolean, { nullable: true } )
    status?: boolean

}

@InputType()
class UsersUpdateInput {

    @Field( () => String, { nullable: true } )
    id_client_nc?: string

    @Field( () => String, { nullable: true } )
    email?: string

    @Field( () => String, { nullable: true } )
    password?: string

    @Field( () => String, { nullable: true } )
    name?: string

    @Field( () => String, { nullable: true } )
    last_name?: string

    @Field( () => String, { nullable: true } )
    photo_url?: string

    @Field( () => String, { nullable: true } )
    phone?: string

    @Field( () => Boolean, { nullable: true } )
    root?: boolean

    @Field( () => String, { nullable: true } )
    activation_key?: string

    @Field( () => String, { nullable: true } )
    last_used_at?: string

    @Field( () => String, { nullable: true } )
    created_user?: string

    @Field( () => Boolean, { nullable: true } )
    status?: boolean

}


@Resolver()
export class UsersResolverUsers {

    @Mutation(() => nc_mb_user_users)
    async usersCreateUsers(@Arg("variables", () => UsersInput) variables: UsersInput) {
        const newUser = nc_mb_user_users.create(variables)
        return await newUser.save()
    }

    @Mutation(() => Boolean)
    async usersUpdateUsers(
        @Arg("user_id", () => Int) user_id: number,
        @Arg("fields", () => UsersUpdateInput) fields: UsersUpdateInput
    ) {
        await nc_mb_user_users.update({ user_id }, fields)
        return true
    }

    @Mutation(() => Boolean)
    async usersDeleteUsers(@Arg("user_id", () => Int) user_id: number) {
        await nc_mb_user_users.delete(user_id)
        return true
    }

    @Query( () => [nc_mb_user_users] )
    async usersQueryUsers() {
        return await nc_mb_user_users.find()
    } 

}


