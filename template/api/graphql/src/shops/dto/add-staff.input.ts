import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class AddStaffInput {
  email: string;
  password: string;
  name: string;
  @Field(() => ID)
  shop_id: number;
}
