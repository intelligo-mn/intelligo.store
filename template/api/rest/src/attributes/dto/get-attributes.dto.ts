import { SortOrder } from 'src/common/dto/generic-conditions.dto';

export class GetAttributesArgs {
  orderBy?: QueryAttributesOrderByOrderByClause[];
  shop_id?: number;
}

export class QueryAttributesOrderByOrderByClause {
  column: QueryAttributesOrderByColumn;
  order: SortOrder;
}
export enum QueryAttributesOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}
