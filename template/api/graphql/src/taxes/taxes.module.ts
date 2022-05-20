import { Module } from '@nestjs/common';
import { TaxesService } from './taxes.service';
import { TaxesResolver } from './taxes.resolver';

@Module({
  providers: [TaxesResolver, TaxesService]
})
export class TaxesModule {}
