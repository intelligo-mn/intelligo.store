import { ArgsType, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Withdraw } from '../entities/withdraw.entity';

@ObjectType()
export class WithdrawPaginator {
  data: Withdraw[];
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetWithdrawsArgs extends PaginationArgs {
  orderBy?: string;
  sortedBy?: string;
  status?: string;
  @Field(() => ID, { nullable: true })
  shop_id?: number;
}
