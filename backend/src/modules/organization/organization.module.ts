import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationController } from './organization.controller';
import { OrganizationRepository } from './organization.repository';
import { OrganizationService } from './organization.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationRepository])],
  controllers: [OrganizationController], 
  providers: [OrganizationService],
  exports: [OrganizationService]
})
export class OrganizationModule {}
