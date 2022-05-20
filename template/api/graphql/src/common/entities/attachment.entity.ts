import { ObjectType, InputType, ID, Field } from '@nestjs/graphql';

@InputType('AttachmentInput', { isAbstract: true })
@ObjectType()
export class Attachment {
  @Field(() => ID, { nullable: true })
  id?: number;
  thumbnail?: string;
  original?: string;
}
