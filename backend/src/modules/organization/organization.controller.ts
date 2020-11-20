import { Body, Controller, Delete, Get, Logger, Param, Post as PostMethod, Put, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import Organization from '../../domain/organization';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { LoggingInterceptor } from '../../core/interceptors/logging.interceptor';
import { RolesGuard, Roles, RoleType, AuthGuard } from '../../core';
import { HeaderUtil } from '../../core/header-util';
import { OrganizationService } from './organization.service';
@Controller('api/organization')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags('Organization')
export class OrganizationController {
  logger = new Logger('OrganizationController');

  constructor(private readonly organizationService: OrganizationService) {}

  @Get('/')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'List all records',
    type: Organization,
  })
  async getAll(@Req() req: Request): Promise<Organization[]> {
    const pageRequest: PageRequest = new PageRequest(req?.query?.page, req.query.size, req.query.sort);
    const [results, count] = await this.organizationService.findAndCount({
      skip: +pageRequest.page * pageRequest.size,
      take: +pageRequest.size,
      order: pageRequest.sort.asOrder(),
    });
    HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
    return results;
  }

  @Get('/:id')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Organization,
  })
  async getOne(@Param('id') id: string): Promise<Organization> {
    return await this.organizationService.findById(id);
  }

  @PostMethod('/')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Create Organization' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: Organization,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async post(@Req() req: Request, @Body() Organization: Organization): Promise<Organization> {
    const created = await this.organizationService.save(Organization);
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Organization', created.id);
    return created;
  }

  @Put('/')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Update Organization' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: Organization,
  })
  async put(@Req() req: Request, @Body() Organization: Organization): Promise<Organization> {
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Organization', Organization.id);
    return await this.organizationService.update(Organization);
  }

  @Delete('/:id')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Delete Organization' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.',
  })
  async remove(@Req() req: Request, @Param('id') id: string): Promise<Organization> {
    HeaderUtil.addEntityDeletedHeaders(req.res, 'Organization', id);
    const toDelete = await this.organizationService.findById(id);
    return await this.organizationService.delete(toDelete);
  }
}
