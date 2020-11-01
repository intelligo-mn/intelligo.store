import { Body, Controller, Delete, Get, Logger, Param, Post as PostMethod, Put, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import Unit from '../../domain/unit.entity';
import { UnitService } from '../../service/unit.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { LoggingInterceptor } from '../../core/interceptors/logging.interceptor';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard, Roles, RoleType } from 'src/core';
import { HeaderUtil } from 'src/core/header-util';

@Controller('api/units')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags('units')
export class UnitController {
  logger = new Logger('UnitController');

  constructor(private readonly unitService: UnitService) {}

  @Get('/')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'List all records',
    type: Unit,
  })
  async getAll(@Req() req: Request): Promise<Unit[]> {
    const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
    const [results, count] = await this.unitService.findAndCount({
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
    type: Unit,
  })
  async getOne(@Param('id') id: string): Promise<Unit> {
    return await this.unitService.findById(id);
  }

  @PostMethod('/')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Create unit' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: Unit,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async post(@Req() req: Request, @Body() unit: Unit): Promise<Unit> {
    const created = await this.unitService.save(unit);
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Unit', created.id);
    return created;
  }

  @Put('/')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Update unit' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: Unit,
  })
  async put(@Req() req: Request, @Body() unit: Unit): Promise<Unit> {
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Unit', unit.id);
    return await this.unitService.update(unit);
  }

  @Delete('/:id')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Delete unit' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.',
  })
  async remove(@Req() req: Request, @Param('id') id: string): Promise<Unit> {
    HeaderUtil.addEntityDeletedHeaders(req.res, 'Unit', id);
    const toDelete = await this.unitService.findById(id);
    return await this.unitService.delete(toDelete);
  }
}
