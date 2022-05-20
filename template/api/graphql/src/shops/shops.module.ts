import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsResolver } from './shops.resolver';

@Module({
  providers: [ShopsResolver, ShopsService]
})
export class ShopsModule {}
