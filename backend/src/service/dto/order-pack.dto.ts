/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

import { ProductDTO } from './product.dto';
import { OrderPackStatus } from '../../domain/enumeration/order-pack-status';

/**
 * A OrderPack DTO object.
 */
export class OrderPackDTO extends BaseDTO {
  @IsNotEmpty()
  @ApiModelProperty({ description: 'name field' })
  name: string;

  @IsNotEmpty()
  @ApiModelProperty({ description: 'startDate field' })
  startDate: any;

  @IsNotEmpty()
  @ApiModelProperty({ description: 'endDate field' })
  endDate: any;

  @IsNotEmpty()
  @ApiModelProperty({ enum: OrderPackStatus, description: 'status enum field' })
  status: OrderPackStatus;

  @ApiModelProperty({ type: ProductDTO, description: 'products relationship' })
  products: ProductDTO;

  
}
