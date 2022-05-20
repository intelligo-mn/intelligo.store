import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsResolver } from './wallets.resolver';

@Module({
  providers: [WalletsResolver, WalletsService]
})
export class WalletsModule {}
