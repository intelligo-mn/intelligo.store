import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationController } from './organization.controller';
import { OrganizationRepository } from './organization.repository';
import { ContactService } from './contact.service';
import { ContactRepository } from './contact.repository';
import { OrganizationService } from './organization.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationRepository, ContactRepository])],
  controllers: [OrganizationController],
  providers: [OrganizationService, ContactService],
  exports: [OrganizationService, ContactService]
})
export class OrganizationModule {}
