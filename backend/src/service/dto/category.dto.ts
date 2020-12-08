/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

import { ProductDTO } from './product.dto';
import { OrganizationDTO } from './organization.dto';

/**
 * A Category DTO object.
 */
export class CategoryDTO extends BaseDTO {
  @IsNotEmpty()
  @ApiProperty({ description: 'name field' })
  name: string;

  @ApiProperty({ description: 'description field', required: false })
  description: string;

  @ApiProperty({ type: ProductDTO, isArray: true, description: 'products relationship' })
  products: ProductDTO[];

  @ApiProperty({ type: OrganizationDTO, isArray: true, description: 'organizations relationship' })
  organizations: OrganizationDTO[];

  
}
