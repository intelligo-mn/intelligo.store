import { Module } from '@nestjs/common';
import { ImportsService } from './imports.service';
import { ImportsController } from './imports.controller';

@Module({
  controllers: [ImportsController],
  providers: [ImportsService],
})
export class ImportsModule {}
