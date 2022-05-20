import { InputType, PickType } from '@nestjs/graphql';
import { Withdraw } from '../entities/withdraw.entity';

@InputType()
export class CreateWithdrawInput extends PickType(Withdraw, [
  'amount',
  'note',
  'details',
  'payment_method',
  'shop_id',
]) {}
