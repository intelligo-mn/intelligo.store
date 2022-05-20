import { Module } from '@nestjs/common';
import { AttributesService } from './attributes.service';
import { AttributesController } from './attributes.controller';

@Module({
  controllers: [AttributesController],
  providers: [AttributesService],
})
export class AttributesModule {}
