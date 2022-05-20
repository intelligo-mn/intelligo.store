import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import {
  CategoryPaginator,
  GetCategoriesArgs,
} from './dto/get-categories.args';
import { GetCategoryArgs } from './dto/get-category.args';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => Category)
  createCategory(@Args('input') createCategoryInput: CreateCategoryInput) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query(() => CategoryPaginator, { name: 'categories' })
  async getCategories(
    @Args() getCategoriesArgs: GetCategoriesArgs,
  ): Promise<CategoryPaginator> {
    return this.categoriesService.getCategories(getCategoriesArgs);
  }

  @Query(() => Category, { name: 'category' })
  async getCategory(
    @Args() getCategoryArgs: GetCategoryArgs,
  ): Promise<Category> {
    return this.categoriesService.getCategory(getCategoryArgs);
  }

  @Mutation(() => Category)
  updateCategory(@Args('input') updateCategoryInput: UpdateCategoryInput) {
    return this.categoriesService.update(
      updateCategoryInput.id,
      updateCategoryInput,
    );
  }

  @Mutation(() => Category)
  deleteCategory(@Args('id', { type: () => ID }) id: number) {
    return this.categoriesService.remove(id);
  }
}
