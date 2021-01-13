import { Body, Controller, Delete, Get, Logger, Param, Post as PostMethod, Put, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { UnitDTO } from '../../domain/dto/unit.dto';
import { UnitService } from '../../service/unit.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../core';
import { HeaderUtil } from '../../core/header-util';
import { LoggingInterceptor } from '../../core/interceptors/logging.interceptor';

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
    type: UnitDTO
  })
  async getAll(@Req() req: Request): Promise<UnitDTO[]> {
    const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
    const [results, count] = await this.unitService.findAndCount({
      skip: +pageRequest.page * pageRequest.size,
      take: +pageRequest.size,
      order: pageRequest.sort.asOrder()
    });
    HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
    return results;
  }

  @Get('/:id')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: UnitDTO
  })
  async getOne(@Param('id') id: string): Promise<UnitDTO> {
    return await this.unitService.findById(id);
  }

  @PostMethod('/')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Create unit' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: UnitDTO
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async post(@Req() req: Request, @Body() unitDTO: UnitDTO): Promise<UnitDTO> {
    const created = await this.unitService.save(unitDTO);
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Unit', created.id);
    return created;
  }

  @Put('/')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Update unit' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: UnitDTO
  })
  async put(@Req() req: Request, @Body() unitDTO: UnitDTO): Promise<UnitDTO> {
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Unit', unitDTO.id);
    return await this.unitService.update(unitDTO);
  }

  @Delete('/:id')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Delete unit' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.'
  })
  async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
    HeaderUtil.addEntityDeletedHeaders(req.res, 'Unit', id);
    return await this.unitService.deleteById(id);
  }
}
