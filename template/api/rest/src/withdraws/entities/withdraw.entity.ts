import { CoreEntity } from 'src/common/entities/core.entity';
import { Shop } from 'src/shops/entities/shop.entity';

export class Withdraw extends CoreEntity {
  amount: number;
  status: WithdrawStatus;
  shop_id: number;
  shop: Shop;
  payment_method: string;
  details: string;
  note: string;
}

export enum WithdrawStatus {
  APPROVED = 'Approved',
  PENDING = 'Pending',
  ON_HOLD = 'On hold',
  REJECTED = 'Rejected',
  PROCESSING = 'Processing',
}
