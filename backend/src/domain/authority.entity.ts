import { Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('nhi_authority')
export class Authority {
    @ApiProperty({ example: 'ROLE_USER', description: 'User role' })
    @PrimaryColumn()
    name: string;
}
