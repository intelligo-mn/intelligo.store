import {
  ArgsType,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { SortOrder } from 'src/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Coupon } from '../entities/coupon.entity';

@ObjectType()
export class CouponPaginator {
  data: Coupon[];
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetCouponsArgs extends PaginationArgs {
  orderBy?: QueryCouponsOrderByOrderByClause[];
  text?: string;
}

@InputType()
export class QueryCouponsOrderByOrderByClause {
  column: QueryCouponsOrderByColumn;
  order: SortOrder;
}

export enum QueryCouponsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
  CODE = 'CODE',
  AMOUNT = 'AMOUNT',
}

registerEnumType(QueryCouponsOrderByColumn, {
  name: 'QueryCouponsOrderByColumn',
});
