import { ArgsType, InputType, ObjectType } from '@nestjs/graphql';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { OrderFiles } from '../entities/order.entity';
import { SortOrder } from '../../common/dto/generic-conditions.input';

@ObjectType()
export class OrderedFilePaginator {
  data: OrderFiles[];
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetOrderFilesPaginator extends PaginationArgs {
  orderBy?: QueryOrderFilesOrderByOrderByClause[];
}

@InputType()
export class QueryOrderFilesOrderByOrderByClause {
  order: SortOrder;
}
