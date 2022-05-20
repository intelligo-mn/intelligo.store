import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';

@Module({
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}
