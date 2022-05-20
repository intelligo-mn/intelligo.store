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
import { Manufacturer } from '../entities/manufacturer.entity';

@ObjectType()
export class ManufacturerPaginator {
  data: Manufacturer[];
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetManufacturersArgs extends PaginationArgs {
  orderBy?: QueryManufacturersOrderByOrderByClause[];
  text?: string;
  hasType?: QueryManufacturersHasTypeWhereHasConditions;
  is_approved?: boolean;
}

@InputType()
export class QueryManufacturersOrderByOrderByClause {
  column: QueryManufacturersOrderByColumn;
  order: SortOrder;
}

@InputType()
export class QueryManufacturersHasTypeWhereHasConditions extends WhereHasConditions {
  column: QueryManufacturersHasTypeColumn;
  AND?: QueryManufacturersHasTypeWhereHasConditions[];
  OR?: QueryManufacturersHasTypeWhereHasConditions[];
  HAS?: QueryManufacturersHasTypeWhereHasConditionsRelation;
}

@InputType()
export class QueryManufacturersHasTypeWhereHasConditionsRelation extends WhereHasConditionsRelation {
  condition: QueryManufacturersHasTypeWhereHasConditions;
}

export enum QueryManufacturersOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryManufacturersOrderByColumn, {
  name: 'QueryManufacturersOrderByColumn',
});

export enum QueryManufacturersHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryManufacturersHasTypeColumn, {
  name: 'QueryManufacturersHasTypeColumn',
});
