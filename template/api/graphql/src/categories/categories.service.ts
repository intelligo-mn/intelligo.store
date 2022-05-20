import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import Fuse from 'fuse.js';
import categoriesJson from './categories.json';
import { Category } from './entities/category.entity';
import { paginate } from 'src/common/pagination/paginate';
import { GetCategoriesArgs } from './dto/get-categories.args';
import { GetCategoryArgs } from './dto/get-category.args';

const categories = plainToClass(Category, categoriesJson);
const options = {
  keys: ['name', 'type.slug'],
  threshold: 0.3,
};
const fuse = new Fuse(categories, options);

@Injectable()
export class CategoriesService {
  private categories: Category[] = categories;

  create(createCategoryInput: CreateCategoryInput) {
    return this.categories[0];
  }

  getCategories({ text, first, page, hasType, parent }: GetCategoriesArgs) {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    let data: Category[] = this.categories;
    if (text?.replace(/%/g, '')) {
      data = fuse.search(text)?.map(({ item }) => item);
    }
    if (hasType?.value) {
      data = fuse.search(hasType.value as unknown)?.map(({ item }) => item);
    }
    if (parent === null) {
      data = data.filter(({ parent: parentValue }) => parentValue === null);
    }
    const results = data.slice(startIndex, endIndex);
    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }

  getCategory({ id, slug }: GetCategoryArgs): Category {
    if (id) {
      return this.categories.find((p) => p.id === Number(id));
    }
    return this.categories.find((p) => p.slug === slug);
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return this.categories[0];
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
