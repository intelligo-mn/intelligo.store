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
import { Category } from '../entities/category.entity';

@ObjectType()
export class CategoryPaginator {
  data: Category[];
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetCategoriesArgs extends PaginationArgs {
  orderBy?: QueryCategoriesOrderByOrderByClause[];
  text?: string;
  hasType?: QueryCategoriesHasTypeWhereHasConditions;
  name?: string;
  @Field(() => ID, { nullable: true })
  parent?: number = null;
}

@InputType()
export class QueryCategoriesOrderByOrderByClause {
  column: QueryCategoriesOrderByColumn;
  order: SortOrder;
}
@InputType()
export class QueryCategoriesHasTypeWhereHasConditions extends WhereHasConditions {
  column: QueryCategoriesHasTypeColumn;
  AND?: QueryCategoriesHasTypeWhereHasConditions[];
  OR?: QueryCategoriesHasTypeWhereHasConditions[];
  HAS?: QueryCategoriesHasTypeWhereHasConditionsRelation;
}
@InputType()
export class QueryCategoriesHasTypeWhereHasConditionsRelation extends WhereHasConditionsRelation {
  condition: QueryCategoriesHasTypeWhereHasConditions;
}

export enum QueryCategoriesOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryCategoriesOrderByColumn, {
  name: 'QueryCategoriesOrderByColumn',
});

export enum QueryCategoriesHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryCategoriesHasTypeColumn, {
  name: 'QueryCategoriesHasTypeColumn',
});
