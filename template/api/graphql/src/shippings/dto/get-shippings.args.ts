import { ArgsType, InputType, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from 'src/common/dto/generic-conditions.input';

@ArgsType()
export class GetShippingsArgs {
  text?: string;
  orderBy?: QueryShippingClassesOrderByOrderByClause[];
}

@InputType()
export class QueryShippingClassesOrderByOrderByClause {
  column: QueryShippingClassesOrderByColumn;
  order: SortOrder;
}
export enum QueryShippingClassesOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
  NAME = 'NAME',
  AMOUNT = 'AMOUNT',
}

registerEnumType(QueryShippingClassesOrderByColumn, {
  name: 'QueryShippingClassesOrderByColumn',
});
