import { ArgsType, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Refund } from '../entities/refund.entity';

@ObjectType()
export class RefundPaginator {
  data: Refund[];
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetRefundsArgs extends PaginationArgs {
  orderBy?: string;
  sortedBy?: string;
  @Field(() => Int, { nullable: true })
  customer_id?: number;
  @Field(() => Int, { nullable: true })
  shop_id?: number;
  @Field(() => Int, { nullable: true })
  order_id?: number;
}
