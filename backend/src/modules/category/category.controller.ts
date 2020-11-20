import { Body, Controller, Delete, Get, Logger, Param, Post as PostMethod, Put, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { CategoryService } from './category.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { LoggingInterceptor } from '../../core/interceptors/logging.interceptor';
import { RolesGuard, Roles, RoleType, AuthGuard } from '../../core';
import { HeaderUtil } from '../../core/header-util';
import Category from '../../domain/category';

@Controller('api/product-types')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags('Product Types')
export class CategoryController {
  logger = new Logger('CategoryController');

  constructor(private readonly categortyService: CategoryService) {}

  @Get('/')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'List all records',
    type: Category,
  })
  async getAll(@Req() req: Request): Promise<Category[]> {
    const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
    const [results, count] = await this.categortyService.findAndCount({
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
    type: Category,
  })
  async getOne(@Param('id') id: string): Promise<Category> {
    return await this.categortyService.findById(id);
  }

  @PostMethod('/')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Create productType' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: Category,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async post(@Req() req: Request, @Body() productType: Category): Promise<Category> {
    const created = await this.categortyService.save(productType);
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Category', created.id);
    return created;
  }

  @Put('/')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Update productType' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: Category,
  })
  async put(@Req() req: Request, @Body() productType: Category): Promise<Category> {
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Category', productType.id);
    return await this.categortyService.update(productType);
  }

  @Delete('/:id')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Delete productType' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.',
  })
  async remove(@Req() req: Request, @Param('id') id: string): Promise<Category> {
    HeaderUtil.addEntityDeletedHeaders(req.res, 'Category', id);
    const toDelete = await this.categortyService.findById(id);
    return await this.categortyService.delete(toDelete);
  }
}
