import { PickType } from '@nestjs/swagger';
import { Withdraw } from '../entities/withdraw.entity';

export class CreateWithdrawDto extends PickType(Withdraw, [
  'amount',
  'note',
  'details',
  'payment_method',
  'shop_id',
]) {}
