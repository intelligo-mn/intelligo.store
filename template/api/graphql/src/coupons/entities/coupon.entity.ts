import { InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/orders/entities/order.entity';

export enum CouponType {
  FIXED_COUPON = 'fixed',
  PERCENTAGE_COUPON = 'percentage',
  FREE_SHIPPING_COUPON = 'free_shipping',
  DEFAULT_COUPON = 'fixed',
}

registerEnumType(CouponType, { name: 'CouponType' });

@InputType('CouponInputType', { isAbstract: true })
@ObjectType()
export class Coupon extends CoreEntity {
  code: string;
  description?: string;
  orders?: Order[];
  type: CouponType;
  image?: Attachment;
  is_valid: boolean;
  amount: number;
  active_from: string;
  expire_at: string;
}
