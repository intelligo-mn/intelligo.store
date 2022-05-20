import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController, StaffsController } from './shops.controller';

@Module({
  controllers: [ShopsController, StaffsController],
  providers: [ShopsService],
})
export class ShopsModule {}
