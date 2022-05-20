import { Module } from '@nestjs/common';
import { ShippingsService } from './shippings.service';
import { ShippingsController } from './shippings.controller';

@Module({
  controllers: [ShippingsController],
  providers: [ShippingsService],
})
export class ShippingsModule {}
