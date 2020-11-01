import { Body, Controller, Delete, Get, Logger, Param, Post as PostMethod, Put, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import ProductType from '../../domain/product-type.entity';
import { ProductTypeService } from '../../service/product-type.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { LoggingInterceptor } from '../../core/interceptors/logging.interceptor';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard, Roles, RoleType } from 'src/core';
import { HeaderUtil } from 'src/core/header-util';

@Controller('api/product-types')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags('product-types')
export class ProductTypeController {
  logger = new Logger('ProductTypeController');

  constructor(private readonly productTypeService: ProductTypeService) {}

  @Get('/')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'List all records',
    type: ProductType,
  })
  async getAll(@Req() req: Request): Promise<ProductType[]> {
    const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
    const [results, count] = await this.productTypeService.findAndCount({
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
    type: ProductType,
  })
  async getOne(@Param('id') id: string): Promise<ProductType> {
    return await this.productTypeService.findById(id);
  }

  @PostMethod('/')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Create productType' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: ProductType,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async post(@Req() req: Request, @Body() productType: ProductType): Promise<ProductType> {
    const created = await this.productTypeService.save(productType);
    HeaderUtil.addEntityCreatedHeaders(req.res, 'ProductType', created.id);
    return created;
  }

  @Put('/')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Update productType' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: ProductType,
  })
  async put(@Req() req: Request, @Body() productType: ProductType): Promise<ProductType> {
    HeaderUtil.addEntityCreatedHeaders(req.res, 'ProductType', productType.id);
    return await this.productTypeService.update(productType);
  }

  @Delete('/:id')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Delete productType' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.',
  })
  async remove(@Req() req: Request, @Param('id') id: string): Promise<ProductType> {
    HeaderUtil.addEntityDeletedHeaders(req.res, 'ProductType', id);
    const toDelete = await this.productTypeService.findById(id);
    return await this.productTypeService.delete(toDelete);
  }
}
