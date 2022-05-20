import { ArgsType, InputType, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from 'src/common/dto/generic-conditions.input';

@ArgsType()
export class GetTypesArgs {
  orderBy?: QueryTypesOrderByOrderByClause[];
  text?: string;
}

@InputType()
export class QueryTypesOrderByOrderByClause {
  column: QueryTypesOrderByColumn;
  order: SortOrder;
}

export enum QueryTypesOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryTypesOrderByColumn, {
  name: 'QueryTypesOrderByColumn',
});
