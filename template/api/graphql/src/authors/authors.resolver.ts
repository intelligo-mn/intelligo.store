import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from './entities/author.entity';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { AuthorPaginator, GetAuthorsArgs } from './dto/get-authors.args';
import { GetAuthorArgs } from './dto/get-author.args';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Mutation(() => Author)
  createAuthor(@Args('input') createAuthorInput: CreateAuthorInput) {
    return this.authorsService.create(createAuthorInput);
  }

  @Query(() => AuthorPaginator, { name: 'authors' })
  async getAuthors(
    @Args() getAuthorsArgs: GetAuthorsArgs,
  ): Promise<AuthorPaginator> {
    return this.authorsService.getAuthors(getAuthorsArgs);
  }

  @Query(() => Author, { name: 'author' })
  async getAuthorBySlug(@Args() getAuthorArgs: GetAuthorArgs): Promise<Author> {
    return this.authorsService.getAuthor(getAuthorArgs);
  }

  @Mutation(() => Author)
  updateAuthor(@Args('input') updateAuthorInput: UpdateAuthorInput) {
    return this.authorsService.update(updateAuthorInput.id, updateAuthorInput);
  }

  @Mutation(() => Author)
  deleteAuthor(@Args('id', { type: () => ID }) id: number) {
    return this.authorsService.remove(id);
  }

  @Query(() => [Author])
  async topAuthors(
    @Args('limit', { type: () => Int }) limit: number,
  ): Promise<Author[]> {
    return this.authorsService.topAuthors(limit);
  }
}
