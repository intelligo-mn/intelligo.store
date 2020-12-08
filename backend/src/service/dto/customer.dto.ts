/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

import { OrganizationDTO } from './organization.dto';
import { OrderDTO } from './order.dto';

/**
 * A Customer DTO object.
 */
export class CustomerDTO extends BaseDTO {
  @ApiProperty({ description: 'name field', required: false })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'phone field' })
  phone: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'addressLine1 field' })
  addressLine1: string;

  @ApiProperty({ description: 'addressLine2 field', required: false })
  addressLine2: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'city field' })
  city: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'country field' })
  country: string;

  @ApiProperty({ type: OrganizationDTO, isArray: true, description: 'organizations relationship' })
  organizations: OrganizationDTO[];

  @ApiProperty({ type: OrderDTO, isArray: true, description: 'orders relationship' })
  orders: OrderDTO[];

  
}
