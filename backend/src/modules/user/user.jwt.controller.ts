import {
  Body,
  Controller,
  Logger,
  Post,
  Req,
  Res,
  UseInterceptors,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Request, Response } from "express";
import { LoggingInterceptor } from "src/core/interceptors/logging.interceptor";
import { UserLoginDTO } from "src/domain/dto/user-login.dto";
import { AuthService } from "../auth/auth.service";

@Controller("api")
@UseInterceptors(LoggingInterceptor)
@ApiTags("user-jwt-controller")
export class UserJWTController {
  logger = new Logger("UserJWTController");

  constructor(private readonly authService: AuthService) {}

  @Post("/authenticate")
  @ApiOperation({ summary: "Authorization api retrieving token" })
  @ApiResponse({
    status: 201,
    description: "Authorized",
  })
  async authorize(
    @Req() req: Request,
    @Body() user: UserLoginDTO,
    @Res() res: Response
  ): Promise<any> {
    const jwt = await this.authService.login(user);
    res.setHeader("Authorization", "Bearer " + jwt.id_token);
    return res.json(jwt);
  }
}
