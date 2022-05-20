import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TagsService } from './tags.service';
import { Tag } from './entities/tag.entity';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { GetTagsArgs, TagPaginator } from './dto/get-tags.args';
import { GetTagArgs } from './dto/get-tag.args';

@Resolver(() => Tag)
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Mutation(() => Tag)
  createTag(@Args('input') createTagInput: CreateTagInput) {
    return this.tagsService.create(createTagInput);
  }

  @Query(() => TagPaginator, { name: 'tags' })
  getTags(@Args() getTagsArgs: GetTagsArgs) {
    return this.tagsService.findAll(getTagsArgs);
  }

  @Query(() => Tag, { name: 'tag', nullable: true })
  findOne(@Args() getTagArgs: GetTagArgs) {
    return this.tagsService.findOne(getTagArgs.id);
  }

  @Mutation(() => Tag)
  updateTag(@Args('input') updateTagInput: UpdateTagInput) {
    return this.tagsService.update(updateTagInput.id, updateTagInput);
  }

  @Mutation(() => Tag)
  deleteTag(@Args('id', { type: () => ID }) id: number) {
    return this.tagsService.remove(id);
  }
}
