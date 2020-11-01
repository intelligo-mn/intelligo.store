import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ManagementController } from '../../core/management.controller';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController, ManagementController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
