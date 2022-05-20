import {
  ArgsType,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { SortOrder } from 'src/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { OrderStatus } from '../entities/order-status.entity';

@ObjectType()
export class OrderStatusPaginator {
  data: OrderStatus[];
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetOrderStatusesArgs extends PaginationArgs {
  orderBy?: QueryOrderStatusesOrderByOrderByClause[];
  text?: string;
}

@InputType()
export class QueryOrderStatusesOrderByOrderByClause {
  column?: QueryOrderStatusesOrderByColumn;
  order: SortOrder;
}

export enum QueryOrderStatusesOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryOrderStatusesOrderByColumn, {
  name: 'QueryOrderStatusesOrderByColumn',
});
