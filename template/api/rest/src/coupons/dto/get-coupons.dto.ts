import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';

import { Coupon } from '../entities/coupon.entity';

export class CouponPaginator extends Paginator<Coupon> {
  data: Coupon[];
}

export class GetCouponsDto extends PaginationArgs {
  orderBy?: QueryCouponsOrderByColumn;
  sortedBy?: SortOrder;
  search?: string;
}

export enum QueryCouponsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
  CODE = 'CODE',
  AMOUNT = 'AMOUNT',
}
