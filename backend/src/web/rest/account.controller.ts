import { Body, Param, Post, Res, UseGuards, Controller, Get, Logger, Req, UseInterceptors } from '@nestjs/common';
import { Response, Request } from 'express';
import { User } from '../../domain/user.entity';
import { LoggingInterceptor } from '../../core/interceptors/logging.interceptor';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { AuthService } from '../../service/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/core';

@Controller('api')
@UseInterceptors(LoggingInterceptor)
@UseGuards(AuthGuard, RolesGuard)
@ApiBearerAuth()
@ApiTags('account-resource')
export class AccountController {
  logger = new Logger('AccountController');

  constructor(private readonly authService: AuthService) {}
  @Post('/register')
  @ApiOperation({ summary: 'Register user' })
  @ApiResponse({
    status: 201,
    description: 'Registered user',
    type: User,
  })
  registerAccount(@Req() req: Request, @Body() user: User, @Res() res: Response): any {
    return res.sendStatus(201);
  }

  @Get('/activate')
  @ApiOperation({ summary: 'Activate an account' })
  @ApiResponse({
    status: 200,
    description: 'activated',
  })
  activateAccount(@Param() key: string, @Res() res: Response): any {
    return res.sendStatus(200);
  }

  @Get('/authenticate')
  @ApiOperation({ summary: 'Check if the user is authenticated' })
  @ApiResponse({
    status: 200,
    description: 'login authenticated',
  })
  isAuthenticated(@Req() req: Request): any {
    const user: any = req.user;
    return user.login;
  }

  @Get('/account')
  @ApiOperation({ summary: 'Get the current user.' })
  @ApiResponse({
    status: 200,
    description: 'user retrieved',
  })
  async getAccount(@Req() req: Request): Promise<any> {
    const user: any = req.user;
    return await this.authService.findUserWithAuthById(user.id);
  }

  @Post('/account')
  @ApiOperation({ summary: 'Update the current user information' })
  @ApiResponse({
    status: 201,
    description: 'user info updated',
    type: User,
  })
  saveAccount(@Req() req: Request, @Body() user: User, @Res() res: Response): any {
    return res.sendStatus(201);
  }

  @Post('/account/change-password')
  @ApiOperation({ summary: 'Change current password' })
  @ApiResponse({
    status: 201,
    description: 'user password changed',
    type: User,
  })
  changePassword(@Req() req: Request, @Body() user: User, @Res() res: Response): any {
    return res.sendStatus(201);
  }

  @Post('/account/reset-password/init')
  @ApiOperation({ summary: 'Send an email to reset the password of the user' })
  @ApiResponse({
    status: 201,
    description: 'mail to reset password sent',
    type: 'string',
  })
  requestPasswordReset(@Req() req: Request, @Body() email: string, @Res() res: Response): any {
    return res.sendStatus(201);
  }

  @Post('/account/reset-password/finish')
  @ApiOperation({ summary: 'Finish to reset the password of the user' })
  @ApiResponse({
    status: 201,
    description: 'password reset',
    type: 'string',
  })
  finishPasswordReset(@Req() req: Request, @Body() keyAndPassword: string, @Res() res: Response): any {
    return res.sendStatus(201);
  }
}
