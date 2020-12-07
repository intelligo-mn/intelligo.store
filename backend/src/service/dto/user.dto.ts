import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';
import { BaseDTO } from './base.dto';
/**
 * An User DTO object.
 */
export class UserDTO extends BaseDTO {
    @ApiModelProperty({ uniqueItems: true, example: 'myuser', description: 'User login' })
    @IsString()
    login: string;

    @ApiModelProperty({ example: 'MyUser', description: 'User first name', required: false })
    firstName?: string;

    @ApiModelProperty({ example: 'MyUser', description: 'User last name', required: false })
    lastName?: string;

    @ApiModelProperty({ example: 'myuser@localhost.it', description: 'User email' })
    @IsEmail()
    email: string;

    @ApiModelProperty({ example: 'true', description: 'User activation', required: false })
    activated?: boolean;

    @ApiModelProperty({ example: 'en', description: 'User language', required: false })
    langKey?: string;

    @ApiModelProperty({
        isArray: true,
        enum: ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_ANONYMOUS'],
        description: 'Array of permissions',
        required: false,
    })
    authorities?: any[];

    @ApiModelProperty({ example: 'myuser', description: 'User password' })
    password: string;

    @ApiModelProperty({ example: 'http://my-image-url', description: 'Image url', required: false })
    imageUrl?: string;

    activationKey?: string;

    resetKey?: string;

    resetDate?: Date;
}
