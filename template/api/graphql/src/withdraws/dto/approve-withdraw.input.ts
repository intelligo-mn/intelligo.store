import { InputType, PickType } from '@nestjs/graphql';
import { Withdraw } from '../entities/withdraw.entity';

@InputType()
export class ApproveWithdrawInput extends PickType(Withdraw, [
  'id',
  'status',
]) {}
