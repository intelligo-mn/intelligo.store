import { EntityRepository, Repository } from 'typeorm';
import ProductType from '../domain/product-type.entity';

@EntityRepository(ProductType)
export class ProductTypeRepository extends Repository<ProductType> {}
