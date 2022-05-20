import { Module } from '@nestjs/common';
import { RefundsService } from './refunds.service';
import { RefundsResolver } from './refunds.resolver';

@Module({
  providers: [RefundsResolver, RefundsService]
})
export class RefundsModule {}
