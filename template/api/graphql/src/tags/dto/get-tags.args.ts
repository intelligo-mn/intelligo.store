import {
  ArgsType,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import {
  SortOrder, WhereGTEConditions,
  WhereHasConditions,
  WhereHasConditionsRelation,
} from 'src/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Tag } from '../entities/tag.entity';

@ObjectType()
export class TagPaginator {
  data: Tag[];
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetTagsArgs extends PaginationArgs {
  orderBy?: QueryTagsOrderByOrderByClause[];
  text?: string;
  name?: string;
  hasType?: QueryTagsHasTypeWhereHasConditions;
}

@InputType()
export class QueryTagsOrderByOrderByClause {
  column: QueryTagsOrderByColumn;
  order: SortOrder;
}
@InputType()
export class QueryTagsHasTypeWhereHasConditions extends WhereHasConditions {
  column: QueryTagsHasTypeColumn;
  AND?: QueryTagsHasTypeWhereHasConditions[];
  OR?: QueryTagsHasTypeWhereHasConditions[];
  HAS?: QueryTagsHasTypeWhereHasConditionsRelation;
}
@InputType()
export class QueryTagsHasTypeWhereHasConditionsRelation extends WhereGTEConditions {
  condition: QueryTagsHasTypeWhereHasConditions;
}

export enum QueryTagsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryTagsOrderByColumn, {
  name: 'QueryTagsOrderByColumn',
});

export enum QueryTagsHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryTagsHasTypeColumn, {
  name: 'QueryTagsHasTypeColumn',
});
