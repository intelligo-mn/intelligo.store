import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateTaxInput } from './dto/create-tax.input';
import { GetTaxesArgs } from './dto/get-taxes.args';
import { UpdateTaxInput } from './dto/update-tax.input';
import { Tax } from './entities/tax.entity';
import taxesJson from './taxes.json';
const taxes = plainToClass(Tax, taxesJson);
@Injectable()
export class TaxesService {
  private taxes: Tax[] = taxes;

  create(createTaxInput: CreateTaxInput) {
    return this.taxes[0];
  }

  findAll(getTaxesArgs: GetTaxesArgs) {
    return this.taxes;
  }

  findOne(id: number) {
    return this.taxes.find((tax) => tax.id === Number(id));
  }

  update(id: number, updateTaxInput: UpdateTaxInput) {
    return this.taxes[0];
  }

  remove(id: number) {
    return `This action removes a #${id} tax`;
  }
}
