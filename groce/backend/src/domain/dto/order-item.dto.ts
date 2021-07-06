/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

import { OrderDTO } from './order.dto';
import { ProductDTO } from './product.dto';

/**
 * A OrderItem DTO object.
 */
export class OrderItemDTO extends BaseDTO {
  @ApiProperty({ description: 'quantity field', required: false })
  quantity: number;

  @ApiProperty({ type: ProductDTO, description: 'products relationship' })
  product: ProductDTO;
}
