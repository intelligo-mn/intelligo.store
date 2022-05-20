import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController, TopAuthors } from './authors.controller';

@Module({
  controllers: [AuthorsController, TopAuthors],
  providers: [AuthorsService],
})
export class AuthorsModule {}
