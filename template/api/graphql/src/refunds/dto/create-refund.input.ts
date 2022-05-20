import { InputType, Field, ID } from '@nestjs/graphql';
import { Attachment } from 'src/common/entities/attachment.entity';

@InputType()
export class CreateRefundInput {
  @Field(() => ID)
  order_id: number;
  title: string;
  description: string;
  images?: Attachment[];
}
