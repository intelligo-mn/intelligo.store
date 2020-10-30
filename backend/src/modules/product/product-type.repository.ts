import ProductType from "src/domain/product-type.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ProductType)
export class ProductTypeRepository extends Repository<ProductType> {}
