/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

import { OrderItemDTO } from './order-item.dto';
import { CustomerDTO } from './customer.dto';
import { OrderStatus } from '../../domain/enumeration/order-status';

/**
 * A Order DTO object.
 */
export class OrderDTO extends BaseDTO {
  @IsNotEmpty()
  @ApiModelProperty({ description: 'distributionDate field' })
  distributionDate: any;

  @IsNotEmpty()
  @ApiModelProperty({ enum: OrderStatus, description: 'status enum field' })
  status: OrderStatus;

  @ApiModelProperty({ type: OrderItemDTO, description: 'products relationship' })
  products: OrderItemDTO;

  @ApiModelProperty({ type: CustomerDTO, description: 'manager relationship' })
  manager: CustomerDTO;

  
}
