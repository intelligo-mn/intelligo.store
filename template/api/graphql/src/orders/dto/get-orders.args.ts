import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Order } from '../entities/order.entity';

@ObjectType()
export class OrderPaginator {
  data: Order[];
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetOrdersArgs extends PaginationArgs {
  tracking_number?: string;
  orderBy?: string;
  sortedBy?: string;
  @Field(() => ID)
  customer_id?: number;
  @Field(() => ID)
  shop_id?: number;
}
