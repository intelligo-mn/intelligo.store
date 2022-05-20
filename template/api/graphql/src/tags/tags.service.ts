import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { CreateTagInput } from './dto/create-tag.input';
import { GetTagsArgs } from './dto/get-tags.args';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag } from './entities/tag.entity';
import { plainToClass } from 'class-transformer';
import Fuse from 'fuse.js';
import tagsJson from './tags.json';

const tags = plainToClass(Tag, tagsJson);
const options = {
  keys: [],
  threshold: 0.3,
};
const fuse = new Fuse(tags, options);

@Injectable()
export class TagsService {
  private tags: Tag[] = tags;

  create({ type, ...createTagInput }: CreateTagInput) {
    const newTag = {
      id: this.tags.length + 1,
      slug: createTagInput.name,
      ...createTagInput,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.tags.push(newTag);
    return newTag;
  }

  findAll({ page, first }: GetTagsArgs) {
    return {
      data: this.tags,
      paginatorInfo: paginate(this.tags.length, page, first, this.tags.length),
    };
  }

  findOne(id: number) {
    return this.tags.find((tag) => tag.id === Number(id));
  }

  update(id: number, updateTagInput: UpdateTagInput) {
    return this.tags[0];
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
