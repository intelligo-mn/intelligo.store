/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

import { ProductDTO } from './product.dto';

/**
 * A Unit DTO object.
 */
export class UnitDTO extends BaseDTO {
  @IsNotEmpty()
  @ApiModelProperty({ description: 'name field' })
  name: string;

  @ApiModelProperty({ description: 'description field', required: false })
  description: string;

  @ApiModelProperty({ description: 'value field', required: false })
  value: string;

  @ApiModelProperty({ type: ProductDTO, isArray: true, description: 'products relationship' })
  products: ProductDTO[];

  
}
