import { Controller, Get, Logger, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { User } from '../../domain/user.entity';
import { LoggingInterceptor } from '../../core/interceptors/logging.interceptor';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RolesGuard, Roles, RoleType, AuthGuard } from '../../core';

@Controller('api/users')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags('Authorities')
export class AuthController {
  logger = new Logger('AuthController');

  constructor(private readonly authService: AuthService) {}

  @Get('/authorities')
  @ApiOperation({ summary: 'Get the list of user roles' })
  @ApiResponse({
    status: 200,
    description: 'List all user roles',
    type: 'string',
    isArray: true,
  })
  @Roles(RoleType.ADMIN)
  getAuthorities(@Req() req: any): any {
    const user: User = req.user;
    return user.authorities;
  }
}
