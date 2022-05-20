import { Module } from '@nestjs/common';
import { WithdrawsService } from './withdraws.service';
import { WithdrawsController } from './withdraws.controller';

@Module({
  controllers: [WithdrawsController],
  providers: [WithdrawsService],
})
export class WithdrawsModule {}
