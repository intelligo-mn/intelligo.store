import {
  ArgsType,
  Field,
  ID,
  InputType,
  registerEnumType,
} from '@nestjs/graphql';
import { SortOrder } from 'src/common/dto/generic-conditions.input';

@ArgsType()
export class GetAttributesArgs {
  orderBy?: QueryAttributesOrderByOrderByClause[];
  @Field(() => ID)
  shop_id?: number;
}

@InputType()
export class QueryAttributesOrderByOrderByClause {
  column: QueryAttributesOrderByColumn;
  order: SortOrder;
}
export enum QueryAttributesOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryAttributesOrderByColumn, {
  name: 'QueryAttributesOrderByColumn',
});
