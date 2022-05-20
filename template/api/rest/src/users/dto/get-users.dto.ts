import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';

import { User } from '../entities/user.entity';

export class UserPaginator extends Paginator<User> {
  data: User[];
}

export class GetUsersDto extends PaginationArgs {
  orderBy?: QueryUsersOrderByColumn;
  sortedBy?: SortOrder;
  text?: string;
}

export enum QueryUsersOrderByColumn {
  NAME = 'name',
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
}
