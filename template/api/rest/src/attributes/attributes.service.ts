import { Injectable } from '@nestjs/common';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import attributesJson from '@db/attributes.json';
import { Attribute } from './entities/attribute.entity';
import { plainToClass } from 'class-transformer';

const attributes = plainToClass(Attribute, attributesJson);
@Injectable()
export class AttributesService {
  private attributes: Attribute[] = attributes;
  create(createAttributeDto: CreateAttributeDto) {
    return this.attributes[0];
  }

  findAll() {
    return this.attributes;
  }

  findOne(id: number) {
    return this.attributes.find((p) => p.id === Number(id));
  }

  update(id: number, updateAttributeDto: UpdateAttributeDto) {
    return this.attributes[0];
  }

  remove(id: number) {
    return `This action removes a #${id} attribute`;
  }
}
