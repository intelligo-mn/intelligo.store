import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationController } from '../../web/rest/organization.controller';
import { OrganizationRepository } from './organization.repository';
import { OrganizationService } from '../../service/organization.service';
import { ContactService } from '../../service/contact.service';
import { ContactRepository } from './contact.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationRepository, ContactRepository])],
  controllers: [OrganizationController],
  providers: [OrganizationService, ContactService],
  exports: [OrganizationService, ContactService]
})
export class OrganizationModule {}
