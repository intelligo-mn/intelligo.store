import { Body, Controller, Delete, Get, Logger, Param, Post as PostMethod, Put, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import KinderGarden from '../../domain/kinder-garden.entity';
import { KinderGardenService } from '../../service/kinder-garden.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';

@Controller('api/kinder-gardens')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiUseTags('kinder-gardens')
export class KinderGardenController {
  logger = new Logger('KinderGardenController');

  constructor(private readonly kinderGardenService: KinderGardenService) {}

  @Get('/')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'List all records',
    type: KinderGarden,
  })
  async getAll(@Req() req: Request): Promise<KinderGarden[]> {
    const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
    const [results, count] = await this.kinderGardenService.findAndCount({
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
    type: KinderGarden,
  })
  async getOne(@Param('id') id: string): Promise<KinderGarden> {
    return await this.kinderGardenService.findById(id);
  }

  @PostMethod('/')
  @Roles(RoleType.USER)
  @ApiOperation({ title: 'Create kinderGarden' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: KinderGarden,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async post(@Req() req: Request, @Body() kinderGarden: KinderGarden): Promise<KinderGarden> {
    const created = await this.kinderGardenService.save(kinderGarden);
    HeaderUtil.addEntityCreatedHeaders(req.res, 'KinderGarden', created.id);
    return created;
  }

  @Put('/')
  @Roles(RoleType.USER)
  @ApiOperation({ title: 'Update kinderGarden' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: KinderGarden,
  })
  async put(@Req() req: Request, @Body() kinderGarden: KinderGarden): Promise<KinderGarden> {
    HeaderUtil.addEntityCreatedHeaders(req.res, 'KinderGarden', kinderGarden.id);
    return await this.kinderGardenService.update(kinderGarden);
  }

  @Delete('/:id')
  @Roles(RoleType.USER)
  @ApiOperation({ title: 'Delete kinderGarden' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.',
  })
  async remove(@Req() req: Request, @Param('id') id: string): Promise<KinderGarden> {
    HeaderUtil.addEntityDeletedHeaders(req.res, 'KinderGarden', id);
    const toDelete = await this.kinderGardenService.findById(id);
    return await this.kinderGardenService.delete(toDelete);
  }
}
