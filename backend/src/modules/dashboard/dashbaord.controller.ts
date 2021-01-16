import {
  Controller,
  Get,
  Logger,
  Req,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Request } from "express";
import { AuthGuard, Roles, RolesGuard, RoleType } from "../../core";
import { LoggingInterceptor } from "../../core/interceptors/logging.interceptor";
import { StatisticDTO } from "../../domain/dto/dashboard.dto";
import { DashboardService } from "./dashboard.service";

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
