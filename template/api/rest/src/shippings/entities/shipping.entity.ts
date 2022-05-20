import { CoreEntity } from 'src/common/entities/core.entity';

export class Shipping extends CoreEntity {
  name: string;
  amount: number;
  is_global: boolean;
  type: ShippingType;
}

export enum ShippingType {
  FIXED = 'fixed',
  PERCENTAGE = 'percentage',
  FREE = 'free',
}
