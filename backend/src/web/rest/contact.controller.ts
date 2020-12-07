import { Body, Controller, Delete, Get, Logger, Param, Post as PostMethod, Put, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { ContactDTO } from '../../service/dto/contact.dto';
import { ContactService } from '../../service/contact.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../core/header-util';
import { LoggingInterceptor } from '../../core/interceptors/logging.interceptor';

@Controller('api/contacts')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags('contacts')
export class ContactController {
  logger = new Logger('ContactController');

  constructor(private readonly contactService: ContactService) {}

  @Get('/')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'List all records',
    type: ContactDTO
  })
  async getAll(@Req() req: Request): Promise<ContactDTO[]> {
    const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
    const [results, count] = await this.contactService.findAndCount({
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
    type: ContactDTO
  })
  async getOne(@Param('id') id: string): Promise<ContactDTO> {
    return await this.contactService.findById(id);
  }

  @PostMethod('/')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Create contact' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: ContactDTO
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async post(@Req() req: Request, @Body() contactDTO: ContactDTO): Promise<ContactDTO> {
    const created = await this.contactService.save(contactDTO);
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Contact', created.id);
    return created;
  }

  @Put('/')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Update contact' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: ContactDTO
  })
  async put(@Req() req: Request, @Body() contactDTO: ContactDTO): Promise<ContactDTO> {
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Contact', contactDTO.id);
    return await this.contactService.update(contactDTO);
  }

  @Delete('/:id')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Delete contact' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.'
  })
  async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
    HeaderUtil.addEntityDeletedHeaders(req.res, 'Contact', id);
    return await this.contactService.deleteById(id);
  }
}
