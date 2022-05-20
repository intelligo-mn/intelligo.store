import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ProfilesController, UsersController } from './users.controller';

@Module({
  controllers: [UsersController, ProfilesController],
  providers: [UsersService],
})
export class UsersModule {}
