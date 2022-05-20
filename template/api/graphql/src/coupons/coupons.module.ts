import { Module } from '@nestjs/common';
import { CouponsService } from './coupons.service';
import { CouponsResolver } from './coupons.resolver';

@Module({
  providers: [CouponsResolver, CouponsService]
})
export class CouponsModule {}
