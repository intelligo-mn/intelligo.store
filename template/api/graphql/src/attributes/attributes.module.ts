import { Module } from '@nestjs/common';
import { AttributesService } from './attributes.service';
import { AttributesResolver } from './attributes.resolver';

@Module({
  providers: [AttributesResolver, AttributesService]
})
export class AttributesModule {}
