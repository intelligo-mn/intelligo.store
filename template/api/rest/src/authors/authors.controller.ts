import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorPaginator, GetAuthorDto } from './dto/get-author.dto';
import { GetTopAuthorsDto } from './dto/get-top-authors.dto';
import { Author } from './entities/author.entity';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { CreateAuthorDto } from './dto/create-author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  createAuthor(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get()
  async getAuthors(@Query() query: GetAuthorDto): Promise<AuthorPaginator> {
    return this.authorsService.getAuthors(query);
  }

  @Get(':slug')
  async getAuthorBySlug(@Param('slug') slug: string): Promise<Author> {
    return this.authorsService.getAuthorBySlug(slug);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorsService.update(+id, updateAuthorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorsService.remove(+id);
  }
}

@Controller('top-authors')
export class TopAuthors {
  constructor(private authorsService: AuthorsService) {}

  @Get()
  getTopAuthors(@Query() query: GetTopAuthorsDto): Promise<Author[]> {
    return this.authorsService.getTopAuthors(query);
  }
}
