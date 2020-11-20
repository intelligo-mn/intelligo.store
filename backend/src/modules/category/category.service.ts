import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import Category from '../../domain/category';
import { CategoryRepository } from './category.repository';

const relationshipNames = [];
relationshipNames.push('product');

@Injectable()
export class CategoryService {
  logger = new Logger('CategoryService');

  constructor(@InjectRepository(CategoryRepository) private categoryRepository: CategoryRepository) {}

  async findById(id: string): Promise<Category | undefined> {
    const options = { relations: relationshipNames };
    return await this.categoryRepository.findOne(id, options);
  }

  async findByfields(options: FindOneOptions<Category>): Promise<Category | undefined> {
    return await this.categoryRepository.findOne(options);
  }

  async findAndCount(options: FindManyOptions<Category>): Promise<[Category[], number]> {
    options.relations = relationshipNames;
    return await this.categoryRepository.findAndCount(options);
  }

  async save(productType: Category): Promise<Category | undefined> {
    return await this.categoryRepository.save(productType);
  }

  async update(productType: Category): Promise<Category | undefined> {
    return await this.save(productType);
  }

  async delete(productType: Category): Promise<Category | undefined> {
    return await this.categoryRepository.remove(productType);
  }
}
