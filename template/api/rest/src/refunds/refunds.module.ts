import { Module } from '@nestjs/common';
import { RefundsService } from './refunds.service';
import { RefundsController } from './refunds.controller';

@Module({
  controllers: [RefundsController],
  providers: [RefundsService]
})
export class RefundsModule {}
