import { Resolver, Query } from '@nestjs/graphql';
import { AuthorService } from './author.service';

@Resolver('Author')
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) { }

  @Query(() => String)
  hello() {
    return 'cuoi cung cung dc!'
  }

}

