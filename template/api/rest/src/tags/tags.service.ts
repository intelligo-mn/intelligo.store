import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { CreateTagDto } from './dto/create-tag.dto';
import { GetTagsDto } from './dto/get-tags.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';
import tagsJson from './tags.json';
import { plainToClass } from 'class-transformer';

const tags = plainToClass(Tag, tagsJson);

@Injectable()
export class TagsService {
  private tags: Tag[] = tags;

  create(createTagDto: CreateTagDto) {
    return {
      id: this.tags.length + 1,
      ...createTagDto,
    };
  }

  findAll({ page, limit }: GetTagsDto) {
    if (!page) page = 1;
    const url = `/tags?limit=${limit}`;
    return {
      data: this.tags,
      ...paginate(this.tags.length, page, limit, this.tags.length, url),
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.tags[0];
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
