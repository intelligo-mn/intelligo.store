/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

import { OrderDTO } from './order.dto';
import { ProductDTO } from './product.dto';

/**
 * A OrderItem DTO object.
 */
export class OrderItemDTO extends BaseDTO {
  @ApiModelProperty({ description: 'quantity field', required: false })
  quantity: number;

  @ApiModelProperty({ type: OrderDTO, isArray: true, description: 'orders relationship' })
  orders: OrderDTO[];

  @ApiModelProperty({ type: ProductDTO, description: 'products relationship' })
  products: ProductDTO;

  
}
