import {
  ArgsType,
  Field,
  Float,
  ID,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import {
  SortOrder,
  WhereHasArrayConditions,
  WhereHasConditions,
  WhereHasConditionsRelation,
} from 'src/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Product } from '../entities/product.entity';

//TODO: should make a generic type for paginator
@ObjectType()
export class ProductPaginator {
  data: Product[];
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetProductsArgs extends PaginationArgs {
  orderBy?: QueryProductsOrderByOrderByClause[];
  text?: string;
  status?: string;
  max_price?: PriceRange;
  min_price?: PriceRange;
  price?: PriceRange;
  @Field(() => ID)
  shop_id?: number;
  hasType?: QueryProductsHasTypeWhereHasConditions;
  hasAuthor?: QueryProductsHasAuthorWhereHasConditions;
  hasManufacturer?: QueryProductsHasManufacturerWhereHasConditions;
  hasCategories?: QueryProductsHasCategoriesWhereHasConditions;
  hasTags?: QueryProductsHasTagsWhereHasConditions;
}

@InputType()
export class PriceRange {
  @Field(() => Float)
  from: number;
  @Field(() => Float)
  to: number;
}

@InputType()
export class QueryProductsOrderByOrderByClause {
  column: QueryProductsOrderByColumn;
  order: SortOrder;
}

@InputType()
export class QueryProductsHasTypeWhereHasConditions extends WhereHasConditions {
  column: QueryProductsHasTypeColumn;
  AND?: QueryProductsHasTypeWhereHasConditions[];
  OR?: QueryProductsHasTypeWhereHasConditions[];
  HAS?: QueryProductsHasTypeWhereHasConditionsRelation;
}

@InputType()
export class QueryProductsHasCategoriesWhereHasConditions extends WhereHasArrayConditions {
  column: QueryProductsHasCategoriesColumn;
  AND?: QueryProductsHasCategoriesWhereHasConditions[];
  OR?: QueryProductsHasCategoriesWhereHasConditions[];
  HAS?: QueryProductsHasCategoriesWhereHasConditionsRelation;
}

@InputType()
export class QueryProductsHasTagsWhereHasConditions extends WhereHasArrayConditions {
  column: QueryProductsHasTagsColumn;
  AND?: QueryProductsHasTagsWhereHasConditions[];
  OR?: QueryProductsHasTagsWhereHasConditions[];
  HAS?: QueryProductsHasTagsWhereHasConditionsRelation;
}

@InputType()
export class QueryProductsHasAuthorWhereHasConditions extends WhereHasArrayConditions {
  column: QueryProductsHasAuthorColumn;
  AND?: QueryProductsHasAuthorWhereHasConditions[];
  OR?: QueryProductsHasAuthorWhereHasConditions[];
  HAS?: QueryProductsHasAuthorWhereHasConditionsRelation;
}

@InputType()
export class QueryProductsHasManufacturerWhereHasConditions extends WhereHasArrayConditions {
  column: QueryProductsHasManufacturerColumn;
  AND?: QueryProductsHasManufacturerWhereHasConditions[];
  OR?: QueryProductsHasManufacturerWhereHasConditions[];
  HAS?: QueryProductsHasManufacturerWhereHasConditionsRelation;
}

@InputType()
export class QueryProductsHasTypeWhereHasConditionsRelation extends WhereHasConditionsRelation {
  condition: QueryProductsHasTypeWhereHasConditions;
}

@InputType()
export class QueryProductsHasCategoriesWhereHasConditionsRelation extends WhereHasConditionsRelation {
  condition: QueryProductsHasCategoriesWhereHasConditions;
}

@InputType()
export class QueryProductsHasTagsWhereHasConditionsRelation extends WhereHasConditionsRelation {
  condition: QueryProductsHasTagsWhereHasConditions;
}

@InputType()
export class QueryProductsHasAuthorWhereHasConditionsRelation extends WhereHasConditionsRelation {
  condition: QueryProductsHasAuthorWhereHasConditions;
}

@InputType()
export class QueryProductsHasManufacturerWhereHasConditionsRelation extends WhereHasConditionsRelation {
  condition: QueryProductsHasManufacturerWhereHasConditions;
}

export enum QueryProductsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryProductsOrderByColumn, {
  name: 'QueryProductsOrderByColumn',
});

export enum QueryProductsHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryProductsHasTypeColumn, {
  name: 'QueryProductsHasTypeColumn',
});

export enum QueryProductsHasCategoriesColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryProductsHasCategoriesColumn, {
  name: 'QueryProductsHasCategoriesColumn',
});

export enum QueryProductsHasTagsColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryProductsHasTagsColumn, {
  name: 'QueryProductsHasTagsColumn',
});

export enum QueryProductsHasAuthorColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryProductsHasAuthorColumn, {
  name: 'QueryProductsHasAuthorColumn',
});

export enum QueryProductsHasManufacturerColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryProductsHasManufacturerColumn, {
  name: 'QueryProductsHasManufacturerColumn',
});
