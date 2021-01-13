/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

import { ProductDTO } from './product.dto';
import { OrderPackStatus } from '../enumeration/order-pack-status';

/**
 * A OrderPack DTO object.
 */
export class OrderPackDTO extends BaseDTO {
  @IsNotEmpty()
  @ApiProperty({ description: 'name field' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'startDate field' })
  startDate: any;

  @IsNotEmpty()
  @ApiProperty({ description: 'endDate field' })
  endDate: any;

  @IsNotEmpty()
  @ApiProperty({ enum: OrderPackStatus, description: 'status enum field' })
  status: OrderPackStatus;

  @ApiProperty({ description: 'products relationship' })
  products: any;
}
