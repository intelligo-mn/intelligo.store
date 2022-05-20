import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetOrderArgs {
  @Field(() => ID)
  id?: number;
  tracking_number?: string;
}
