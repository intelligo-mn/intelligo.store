import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from '../web/rest/contact.controller';
import { ContactRepository } from '../repository/contact.repository';
import { ContactService } from '../service/contact.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContactRepository])],
  controllers: [ContactController],
  providers: [ContactService],
  exports: [ContactService]
})
export class ContactModule {}
