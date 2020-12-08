/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

import { ContactDTO } from './contact.dto';
import { CategoryDTO } from './category.dto';
import { CustomerDTO } from './customer.dto';
import { OrganizationStatus } from '../../domain/enumeration/organization-status';
import { OrganizationType } from '../../domain/enumeration/organization-type';

/**
 * A Organization DTO object.
 */
export class OrganizationDTO extends BaseDTO {
  @IsNotEmpty()
  @ApiProperty({ description: 'name field' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ enum: OrganizationStatus, description: 'status enum field' })
  status: OrganizationStatus;

  @IsNotEmpty()
  @ApiProperty({ enum: OrganizationType, description: 'type enum field' })
  type: OrganizationType;

  @ApiProperty({ type: ContactDTO, description: 'contact relationship' })
  contact: ContactDTO;

  @ApiProperty({ type: CategoryDTO, description: 'distributeType relationship' })
  distributeType: CategoryDTO;

  @ApiProperty({ type: CustomerDTO, description: 'manager relationship' })
  manager: CustomerDTO;

  
}
