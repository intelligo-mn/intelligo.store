import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaginatorInfo {
  @Field(() => Int)
  count: number;

  @Field(() => Int)
  currentPage: number;

  @Field(() => Int)
  firstItem: number;

  hasMorePages: boolean;

  @Field(() => Int)
  lastItem: number;

  @Field(() => Int)
  lastPage: number;

  @Field(() => Int)
  perPage: number;

  @Field(() => Int)
  total: number;
}
