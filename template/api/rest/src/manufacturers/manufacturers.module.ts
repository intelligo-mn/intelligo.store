import { Module } from '@nestjs/common';
import { ManufacturersService } from './manufacturers.service';
import {
  ManufacturersController,
  TopManufacturersController,
} from './manufacturers.controller';

@Module({
  controllers: [ManufacturersController, TopManufacturersController],
  providers: [ManufacturersService],
})
export class ManufacturersModule {}
