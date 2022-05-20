import { ArgsType, InputType, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from 'src/common/dto/generic-conditions.input';

@ArgsType()
export class GetTaxesArgs {
  text?: string;
  orderBy?: QueryTaxClassesOrderByOrderByClause[];
}

@InputType()
export class QueryTaxClassesOrderByOrderByClause {
  column: QueryTaxClassesOrderByColumn;
  order: SortOrder;
}
export enum QueryTaxClassesOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
  NAME = 'NAME',
  RATE = 'RATE',
}

registerEnumType(QueryTaxClassesOrderByColumn, {
  name: 'QueryTaxClassesOrderByColumn',
});
