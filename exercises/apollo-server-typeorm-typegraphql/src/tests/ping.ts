import {Query, Resolver} from 'type-graphql'

@Resolver()
export class TestPingResolver {
  @Query(() => String)
  ping() {
    return "Pong!"
  }
}