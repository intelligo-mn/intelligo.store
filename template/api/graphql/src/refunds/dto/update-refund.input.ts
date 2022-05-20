import { InputType, Field, ID } from '@nestjs/graphql';
import { RefundStatus } from '../entities/refund.entity';

@InputType()
export class UpdateRefundInput {
  @Field(() => ID)
  id: number;
  status: RefundStatus;
}
