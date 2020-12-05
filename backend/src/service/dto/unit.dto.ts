/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

import { ProductDTO } from './product.dto';

/**
 * A Unit DTO object.
 */
export class UnitDTO extends BaseDTO {
  @IsNotEmpty()
  @ApiProperty({ description: 'name field' })
  name: string;

  @ApiProperty({ description: 'description field', required: false })
  description: string;

  @ApiProperty({ description: 'value field', required: false })
  value: string;

  @ApiProperty({ type: ProductDTO, isArray: true, description: 'products relationship' })
  products: ProductDTO[];

  
}
