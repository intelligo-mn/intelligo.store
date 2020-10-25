import {
  Body,
  Param,
  Post,
  Res,
  UseGuards,
  Controller,
  Get,
  Logger,
  Req,
  UseInterceptors,
} from "@nestjs/common";
import { Response, Request } from "express";
import { AuthGuard, RolesGuard } from "../security";
import { User } from "../domain/user.entity";
import { LoggingInterceptor } from "./interceptors/logging.interceptor";
import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { AuthService } from "../modules/auth/auth.service";
import { UserService } from "./../modules/user/user.service";
import { HeaderUtil } from "./header-util";
import { Authority } from "src/domain/authority.entity";

@Controller("api")
@UseInterceptors(LoggingInterceptor)
@UseGuards(AuthGuard, RolesGuard)
@ApiBearerAuth()
@ApiTags("account-resource")
export class AccountController {
  logger = new Logger("AccountController");

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}
  @Post("/register")
  @ApiOperation({ summary: "Хэрэглэгч бүртгэх" })
  @ApiResponse({
    status: 201,
    description: "Хэрэглэгч бүртэгдлээ",
    type: User,
  })
  async registerAccount(
    @Req() req: Request,
    @Body() user: User
  ): Promise<User> {
    const role: Authority = { name: "ROLE_USER" };
    user.activated = true;
    user.authorities = [role];
    const created = await this.userService.save(user);
    HeaderUtil.addEntityCreatedHeaders(req.res, "User", created.id);
    return created;
  }

  @Get("/activate")
  @ApiOperation({ summary: "Activate an account" })
  @ApiResponse({
    status: 200,
    description: "activated",
  })
  activateAccount(@Param() key: string, @Res() res: Response): any {
    return res.sendStatus(200);
  }

  @Get("/authenticate")
  @ApiOperation({ summary: "Check if the user is authenticated" })
  @ApiResponse({
    status: 200,
    description: "login authenticated",
  })
  isAuthenticated(@Req() req: Request): any {
    const user: any = req.user;
    return user.login;
  }

  @Get("/account")
  @ApiOperation({ summary: "Get the current user." })
  @ApiResponse({
    status: 200,
    description: "user retrieved",
  })
  async getAccount(@Req() req: Request): Promise<any> {
    const user: any = req.user;
    return await this.authService.findUserWithAuthById(user.id);
  }

  @Post("/account")
  @ApiOperation({ summary: "Update the current user information" })
  @ApiResponse({
    status: 201,
    description: "user info updated",
    type: User,
  })
  saveAccount(
    @Req() req: Request,
    @Body() user: User,
    @Res() res: Response
  ): any {
    return res.sendStatus(201);
  }

  @Post("/account/change-password")
  @ApiOperation({ summary: "Change current password" })
  @ApiResponse({
    status: 201,
    description: "user password changed",
    type: User,
  })
  changePassword(
    @Req() req: Request,
    @Body() user: User,
    @Res() res: Response
  ): any {
    return res.sendStatus(201);
  }

  @Post("/account/reset-password/init")
  @ApiOperation({ summary: "Send an email to reset the password of the user" })
  @ApiResponse({
    status: 201,
    description: "mail to reset password sent",
    type: "string",
  })
  requestPasswordReset(
    @Req() req: Request,
    @Body() email: string,
    @Res() res: Response
  ): any {
    return res.sendStatus(201);
  }

  @Post("/account/reset-password/finish")
  @ApiOperation({ summary: "Finish to reset the password of the user" })
  @ApiResponse({
    status: 201,
    description: "password reset",
    type: "string",
  })
  finishPasswordReset(
    @Req() req: Request,
    @Body() keyAndPassword: string,
    @Res() res: Response
  ): any {
    return res.sendStatus(201);
  }
}
