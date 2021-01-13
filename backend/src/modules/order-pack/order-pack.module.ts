import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderPackController } from '../../web/rest/order-pack.controller';
import { OrderPackRepository } from './order-pack.repository';
import { OrderPackService } from '../../service/order-pack.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderPackRepository])],
  controllers: [OrderPackController],
  providers: [OrderPackService],
  exports: [OrderPackService]
})
export class OrderPackModule {}
