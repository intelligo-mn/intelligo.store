import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';

import { Product } from '../entities/product.entity';

export class ProductPaginator extends Paginator<Product> {
  data: Product[];
}

export class GetProductsDto extends PaginationArgs {
  orderBy?: QueryProductsOrderByColumn;
  sortedBy?: SortOrder;
  search?: string;
}

export enum QueryProductsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}
