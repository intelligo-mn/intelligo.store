import { Entity, PrimaryColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity('nhi_authority')
export class Authority {
    @ApiModelProperty({ example: 'ROLE_USER', description: 'User role' })
    @PrimaryColumn()
    name: string;
}
