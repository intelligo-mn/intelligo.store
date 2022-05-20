import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class MakeOrRevokeAdminInput {
  @Field(() => ID)
  user_id: number;
}
