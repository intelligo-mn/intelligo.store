import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post as PostMethod,
  Put,
  UseGuards,
  Req,
  UseInterceptors,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiTags,
  ApiResponse,
  ApiOperation,
} from "@nestjs/swagger";
import { Request } from "express";
import { StatisticDTO } from "../../domain/dto/Dashboard.dto";
import { DashboardService } from "./dashboard.service";
import { PageRequest, Page } from "../../domain/base/pagination.entity";
import { AuthGuard, Roles, RolesGuard, RoleType } from "../../core";
import { HeaderUtil } from "../../core/header-util";
import { LoggingInterceptor } from "../../core/interceptors/logging.interceptor";

@Controller("api/dashboard")
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags("Dashboard")
export class DashboardController {
  logger = new Logger("DashboardController");

  constructor(private readonly service: DashboardService) {}

  @Get("/statistic")
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: "List all statistic counts",
    type: StatisticDTO,
  })
  async getStatistic(@Req() req: Request): Promise<StatisticDTO> {
    return await this.service.counts();
  }
}
