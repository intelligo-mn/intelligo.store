/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

import { CategoryDTO } from './category.dto';
import { UnitDTO } from './unit.dto';

/**
 * A Product DTO object.
 */
export class ProductDTO extends BaseDTO {
  @IsNotEmpty()
  @ApiModelProperty({ description: 'name field' })
  name: string;

  @ApiModelProperty({ description: 'description field', required: false })
  description: string;

  @ApiModelProperty({ type: CategoryDTO, description: 'category relationship' })
  category: CategoryDTO;

  @ApiModelProperty({ type: UnitDTO, description: 'unit relationship' })
  unit: UnitDTO;

  
}
