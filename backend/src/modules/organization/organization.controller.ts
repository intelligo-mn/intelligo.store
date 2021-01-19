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
import { OrganizationDTO } from "../../domain/dto/organization.dto";
import { PageRequest, Page } from "../../domain/base/pagination.entity";
import { AuthGuard, Roles, RolesGuard, RoleType } from "../../core";
import { HeaderUtil } from "../../core/header-util";
import { LoggingInterceptor } from "../../core/interceptors/logging.interceptor";
import { OrganizationService } from "./organization.service";

@Controller("api/organizations")
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags("organizations")
export class OrganizationController {
  logger = new Logger("OrganizationController");

  constructor(
    private readonly organizationService: OrganizationService
  ) {}

  @Get("/")
  @Roles(RoleType.ADMIN)
  @ApiResponse({
    status: 200,
    description: "List all records",
    type: OrganizationDTO,
  })
  async getAll(@Req() req: Request): Promise<OrganizationDTO[]> {
    const pageRequest: PageRequest = new PageRequest(
      req.query.page,
      req.query.size,
      req.query.sort
    );
    const [results, count] = await this.organizationService.findAndCount({
      skip: +pageRequest.page * pageRequest.size,
      take: +pageRequest.size,
      order: pageRequest.sort.asOrder(),
    });
    HeaderUtil.addPaginationHeaders(
      req.res,
      new Page(results, count, pageRequest)
    );
    return results;
  }

  @Get("/:id")
  @Roles(RoleType.ADMIN)
  @ApiResponse({
    status: 200,
    description: "The found record",
    type: OrganizationDTO,
  })
  async getOne(@Param("id") id: string): Promise<OrganizationDTO> {
    return await this.organizationService.findById(id);
  }

  @PostMethod("/")
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: "Create organization" })
  @ApiResponse({
    status: 201,
    description: "The record has been successfully created.",
    type: OrganizationDTO,
  })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async post(
    @Req() req: Request,
    @Body() organizationDTO: OrganizationDTO
  ): Promise<OrganizationDTO> {
    const created = await this.organizationService.save(organizationDTO);
    HeaderUtil.addEntityCreatedHeaders(req.res, "Organization", created.id);
    return created;
  }

  @Put("/")
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: "Update organization" })
  @ApiResponse({
    status: 200,
    description: "The record has been successfully updated.",
    type: OrganizationDTO,
  })
  async put(
    @Req() req: Request,
    @Body() organizationDTO: OrganizationDTO
  ): Promise<OrganizationDTO> {
    HeaderUtil.addEntityCreatedHeaders(
      req.res,
      "Organization",
      organizationDTO.id
    );
    return await this.organizationService.update(organizationDTO);
  }

  @Delete("/:id")
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: "Delete organization" })
  @ApiResponse({
    status: 204,
    description: "The record has been successfully deleted.",
  })
  async deleteById(
    @Req() req: Request,
    @Param("id") id: string
  ): Promise<void> {
    HeaderUtil.addEntityDeletedHeaders(req.res, "Organization", id);
    return await this.organizationService.deleteById(id);
  }
}
