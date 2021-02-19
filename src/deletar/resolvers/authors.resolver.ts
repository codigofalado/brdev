import { Args, Int, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { DeletarService } from "../deletar.service";
import { Author } from "../models/author.model";

@Resolver(of => Author)
export class AuthorsResolver {
  constructor(
    private deletarService: DeletarService
  ) {}

  @Query(returns => Author, {description: 'Return one author from the provided ID'})
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.deletarService.findAuthorById(id);
  }

  @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return this.deletarService.findPostsByAuthor({ authorId: id });
  }
}