import { Module } from '@nestjs/common';
import { ShippingsService } from './shippings.service';
import { ShippingsResolver } from './shippings.resolver';

@Module({
  providers: [ShippingsResolver, ShippingsService]
})
export class ShippingsModule {}
