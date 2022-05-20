import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';

import { Author } from '../entities/author.entity';

export class AuthorPaginator extends Paginator<Author> {
  data: Author[];
}

export class GetAuthorDto extends PaginationArgs {
  orderBy?: QueryAuthorsOrderByColumn;
  sortedBy?: SortOrder;
  search?: string;
}

export enum QueryAuthorsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}
