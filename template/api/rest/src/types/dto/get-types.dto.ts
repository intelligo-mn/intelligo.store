import { SortOrder } from 'src/common/dto/generic-conditions.dto';

export class GetTypesDto {
  orderBy?: QueryTypesOrderByOrderByClause[];
  text?: string;
}

export class QueryTypesOrderByOrderByClause {
  column: QueryTypesOrderByColumn;
  order: SortOrder;
}

export enum QueryTypesOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}
