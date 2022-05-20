import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateTaxDto } from './dto/create-tax.dto';
import { UpdateTaxDto } from './dto/update-tax.dto';
import { Tax } from './entities/tax.entity';
import taxesJson from './taxes.json';
const taxes = plainToClass(Tax, taxesJson);
@Injectable()
export class TaxesService {
  private taxes: Tax[] = taxes;

  create(createTaxDto: CreateTaxDto) {
    return this.taxes[0];
  }

  findAll() {
    return this.taxes;
  }

  findOne(id: number) {
    return this.taxes.find((tax) => tax.id === Number(id));
  }

  update(id: number, updateTaxDto: UpdateTaxDto) {
    return this.taxes[0];
  }

  remove(id: number) {
    return `This action removes a #${id} tax`;
  }
}
