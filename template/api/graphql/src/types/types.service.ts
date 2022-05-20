import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateTypeInput } from './dto/create-type.input';
import { UpdateTypeInput } from './dto/update-type.input';
import { Type } from './entities/type.entity';
import typesJson from './types.json';
import Fuse from 'fuse.js';
import { GetTypesArgs } from './dto/get-types.args';
import { GetTypeArgs } from './dto/get-type.args';
const types = plainToClass(Type, typesJson);
const options = {
  keys: ['name'],
  threshold: 0.3,
};
const fuse = new Fuse(types, options);
@Injectable()
export class TypesService {
  private types: Type[] = types;

  create(createTypeInput: CreateTypeInput) {
    return this.types[0];
  }

  getTypes({ text }: GetTypesArgs) {
    let data: Type[] = this.types;
    if (text?.replace(/%/g, '')) {
      data = fuse.search(text)?.map(({ item }) => item);
    }
    return data;
  }

  getType({ id, slug }: GetTypeArgs): Type {
    if (id) {
      return this.types.find((p) => p.id === Number(id));
    }
    return this.types.find((p) => p.slug === slug);
  }

  findOne(id: number) {
    return `This action returns a #${id} type`;
  }

  update(id: number, updateTypeInput: UpdateTypeInput) {
    return this.types[0];
  }

  remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
