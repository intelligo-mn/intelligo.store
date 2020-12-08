import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

/**
 * A DTO representing a password change required data - current and new password.
 */
export class PasswordChangeDTO {
    @ApiProperty({ description: 'Current password' })
    @IsString()
    @IsNotEmpty()
    readonly currentPassword: string;

    @ApiProperty({ description: 'New password' })
    @IsString()
    @IsNotEmpty()
    readonly newPassword: string;
}
