import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateShippingDto } from './dto/create-shipping.dto';
import { GetShippingsDto } from './dto/get-shippings.dto';
import { UpdateShippingDto } from './dto/update-shipping.dto';
import { Shipping } from './entities/shipping.entity';
import shippingsJson from './shippings.json';
const shippings = plainToClass(Shipping, shippingsJson);
@Injectable()
export class ShippingsService {
  private shippings: Shipping[] = shippings;

  create(createShippingDto: CreateShippingDto) {
    return this.shippings[0];
  }

  getShippings({}: GetShippingsDto) {
    return this.shippings;
  }

  findOne(id: number) {
    return this.shippings.find((shipping) => shipping.id === Number(id));
  }

  update(id: number, updateShippingDto: UpdateShippingDto) {
    return this.shippings[0];
  }

  remove(id: number) {
    return `This action removes a #${id} shipping`;
  }
}
