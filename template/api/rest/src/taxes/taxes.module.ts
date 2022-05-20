import { Module } from '@nestjs/common';
import { TaxesService } from './taxes.service';
import { TaxesController } from './taxes.controller';

@Module({
  controllers: [TaxesController],
  providers: [TaxesService],
})
export class TaxesModule {}
