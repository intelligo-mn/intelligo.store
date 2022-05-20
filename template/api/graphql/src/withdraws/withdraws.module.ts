import { Module } from '@nestjs/common';
import { WithdrawsService } from './withdraws.service';
import { WithdrawsResolver } from './withdraws.resolver';

@Module({
  providers: [WithdrawsResolver, WithdrawsService]
})
export class WithdrawsModule {}
