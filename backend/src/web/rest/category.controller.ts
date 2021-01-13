import { Body, Controller, Delete, Get, Logger, Param, Post as PostMethod, Put, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { CategoryDTO } from '../../service/dto/category.dto';
import { CategoryService } from '../../service/category.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../core';
import { HeaderUtil } from '../../core/header-util';
import { LoggingInterceptor } from '../../core/interceptors/logging.interceptor';

@Controller('api/categories')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags('Categories')
export class CategoryController {
  logger = new Logger('CategoryController');

  constructor(private readonly categoryService: CategoryService) {}

  @Get('/')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'List all records',
    type: CategoryDTO
  })
  async getAll(@Req() req: Request): Promise<CategoryDTO[]> {
    const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
    const [results, count] = await this.categoryService.findAndCount({
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
    type: CategoryDTO
  })
  async getOne(@Param('id') id: string): Promise<CategoryDTO> {
    return await this.categoryService.findById(id);
  }

  @PostMethod('/')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: CategoryDTO
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async post(@Req() req: Request, @Body() categoryDTO: CategoryDTO): Promise<CategoryDTO> {
    const created = await this.categoryService.save(categoryDTO);
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Category', created.id);
    return created;
  }

  @Put('/')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Update category' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: CategoryDTO
  })
  async put(@Req() req: Request, @Body() categoryDTO: CategoryDTO): Promise<CategoryDTO> {
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Category', categoryDTO.id);
    return await this.categoryService.update(categoryDTO);
  }

  @Delete('/:id')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Delete category' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.'
  })
  async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
    HeaderUtil.addEntityDeletedHeaders(req.res, 'Category', id);
    return await this.categoryService.deleteById(id);
  }
}
