import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddPointsInput {
  @Field(() => ID)
  customer_id: number;
  @Field(() => Int)
  points: number;
}
