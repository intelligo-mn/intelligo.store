import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql';

// import { Mixed } from '../scalars/mixed.scalar';

export enum SQLOperator {
  EQ = 'EQ',
  NEQ = 'NEQ',
  GT = 'GT',
  GTE = 'GTE',
  IN = 'IN',
  BETWEEN = 'BETWEEN',
}

registerEnumType(SQLOperator, {
  name: 'SQLOperator',
});

@InputType()
export class WhereHasConditions {
  @Field(() => SQLOperator, { defaultValue: SQLOperator.EQ })
  operator = SQLOperator.EQ;
  value: string;
}

@InputType()
export class WhereHasArrayConditions {
  @Field(() => SQLOperator, { defaultValue: SQLOperator.EQ })
  operator = SQLOperator.EQ;
  @Field(() => [String])
  value: string[];
}

@InputType()
export class WhereInConditions {
  @Field(() => SQLOperator, { defaultValue: SQLOperator.IN })
  operator = SQLOperator.IN;
  value: string;
}

@InputType()
export class WhereGTEConditions {
  @Field(() => String)
  relation: string;
  @Field(() => SQLOperator, { defaultValue: SQLOperator.GTE })
  operator?: SQLOperator;
  @Field(() => Int)
  amount = 1;
}

@InputType()
export class WhereHasConditionsRelation {
  relation: string;
  operator: SQLOperator;
  @Field(() => Int)
  amount = 1;
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

registerEnumType(SortOrder, {
  name: 'SortOrder',
});
