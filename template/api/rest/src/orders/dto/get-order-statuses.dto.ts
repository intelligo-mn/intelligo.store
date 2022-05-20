import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';

import { OrderStatus } from '../entities/order-status.entity';

export class OrderStatusPaginator extends Paginator<OrderStatus> {
  data: OrderStatus[];
}

export class GetOrderStatusesDto extends PaginationArgs {
  orderBy?: QueryOrderStatusesOrderByColumn;
  sortedBy?: SortOrder;
  search?: string;
}

export enum QueryOrderStatusesOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}
