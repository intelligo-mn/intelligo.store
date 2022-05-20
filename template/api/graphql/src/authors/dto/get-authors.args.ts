import {
  ArgsType,
  Field,
  ID,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import {
  SortOrder,
  WhereHasConditions,
  WhereHasConditionsRelation,
} from 'src/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Author } from '../entities/author.entity';

@ObjectType()
export class AuthorPaginator {
  data: Author[];
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetAuthorsArgs extends PaginationArgs {
  orderBy?: QueryAuthorsOrderByOrderByClause[];
  text?: string;
  @Field(() => Boolean)
  is_approved?: boolean;
}

@InputType()
export class QueryAuthorsOrderByOrderByClause {
  column: QueryAuthorsOrderByColumn;
  order: SortOrder;
}

@InputType()
export class QueryAuthorsHasTypeWhereHasConditions extends WhereHasConditions {
  column: QueryAuthorsHasTypeColumn;
  AND?: QueryAuthorsHasTypeWhereHasConditions[];
  OR?: QueryAuthorsHasTypeWhereHasConditions[];
  HAS?: QueryAuthorsHasTypeWhereHasConditionsRelation;
}

@InputType()
export class QueryAuthorsHasCategoriesWhereHasConditions extends WhereHasConditions {
  column: QueryAuthorsHasCategoriesColumn;
  AND?: QueryAuthorsHasCategoriesWhereHasConditions[];
  OR?: QueryAuthorsHasCategoriesWhereHasConditions[];
  HAS?: QueryAuthorsHasCategoriesWhereHasConditionsRelation;
}

@InputType()
export class QueryAuthorsHasTypeWhereHasConditionsRelation extends WhereHasConditionsRelation {
  condition: QueryAuthorsHasTypeWhereHasConditions;
}

@InputType()
export class QueryAuthorsHasCategoriesWhereHasConditionsRelation extends WhereHasConditionsRelation {
  condition: QueryAuthorsHasCategoriesWhereHasConditions;
}

export enum QueryAuthorsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryAuthorsOrderByColumn, {
  name: 'QueryAuthorsOrderByColumn',
});

export enum QueryAuthorsHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryAuthorsHasTypeColumn, {
  name: 'QueryAuthorsHasTypeColumn',
});

export enum QueryAuthorsHasCategoriesColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryAuthorsHasCategoriesColumn, {
  name: 'QueryAuthorsHasCategoriesColumn',
});
