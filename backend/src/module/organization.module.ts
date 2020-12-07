import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationController } from '../web/rest/organization.controller';
import { OrganizationRepository } from '../repository/organization.repository';
import { OrganizationService } from '../service/organization.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationRepository])],
  controllers: [OrganizationController],
  providers: [OrganizationService],
  exports: [OrganizationService]
})
export class OrganizationModule {}
