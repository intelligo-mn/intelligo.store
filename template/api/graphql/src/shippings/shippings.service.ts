import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateShippingInput } from './dto/create-shipping.input';
import { GetShippingsArgs } from './dto/get-shippings.args';
import { UpdateShippingInput } from './dto/update-shipping.input';
import { Shipping } from './entities/shipping.entity';
import shippingsJson from './shippings.json';
const shippings = plainToClass(Shipping, shippingsJson);
@Injectable()
export class ShippingsService {
  private shippings: Shipping[] = shippings;

  create(createShippingInput: CreateShippingInput) {
    return this.shippings[0];
  }

  findAll(getShippingsArgs: GetShippingsArgs) {
    return this.shippings;
  }

  findOne(id: number) {
    return this.shippings.find((shipping) => shipping.id === Number(id));
  }

  update(updateShippingInput: UpdateShippingInput) {
    return this.shippings[0];
  }

  remove(id: number) {
    return `This action removes a #${id} shipping`;
  }
}
