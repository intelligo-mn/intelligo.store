import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int)
  first?: number = 15;
  @Field(() => Int)
  page?: number = 1;
}
