import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import ProductType from '../domain/product-type.entity';
import { ProductTypeRepository } from './product-type.repository';

const relationshipNames = [];
relationshipNames.push('product');

@Injectable()
export class ProductTypeService {
  logger = new Logger('ProductTypeService');

  constructor(@InjectRepository(ProductTypeRepository) private productTypeRepository: ProductTypeRepository) {}

  async findById(id: string): Promise<ProductType | undefined> {
    const options = { relations: relationshipNames };
    return await this.productTypeRepository.findOne(id, options);
  }

  async findByfields(options: FindOneOptions<ProductType>): Promise<ProductType | undefined> {
    return await this.productTypeRepository.findOne(options);
  }

  async findAndCount(options: FindManyOptions<ProductType>): Promise<[ProductType[], number]> {
    options.relations = relationshipNames;
    return await this.productTypeRepository.findAndCount(options);
  }

  async save(productType: ProductType): Promise<ProductType | undefined> {
    return await this.productTypeRepository.save(productType);
  }

  async update(productType: ProductType): Promise<ProductType | undefined> {
    return await this.save(productType);
  }

  async delete(productType: ProductType): Promise<ProductType | undefined> {
    return await this.productTypeRepository.remove(productType);
  }
}
