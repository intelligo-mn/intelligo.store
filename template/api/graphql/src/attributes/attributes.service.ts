import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateAttributeInput } from './dto/create-attribute.input';
import { UpdateAttributeInput } from './dto/update-attribute.input';
import attributesJson from './attributes.json';
import { Attribute } from './entities/attribute.entity';
import { GetAttributeArgs } from './dto/get-attribute.args';
const attributes = plainToClass(Attribute, attributesJson);
@Injectable()
export class AttributesService {
  private attributes: Attribute[] = attributes;

  create(createAttributeInput: CreateAttributeInput) {
    return this.attributes[0];
  }

  findAll() {
    return this.attributes;
  }

  findOne({ id, slug }: GetAttributeArgs) {
    if (id) {
      return this.attributes.find((p) => p.id === Number(id));
    }
    return this.attributes.find((p) => p.slug === slug);
  }

  update(id: number, updateAttributeInput: UpdateAttributeInput) {
    return this.attributes[0];
  }

  remove(id: number) {
    return `This action removes a #${id} attribute`;
  }
}
