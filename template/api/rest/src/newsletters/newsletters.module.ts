import { Module } from '@nestjs/common';
import { NewslettersController } from './newsletters.controller';
import { NewslettersService } from './newsletters.service';

@Module({
  controllers: [NewslettersController],
  providers: [NewslettersService]
})
export class NewslettersModule {}
