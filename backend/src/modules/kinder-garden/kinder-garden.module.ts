import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KinderGardenController } from './kinder-garden.controller';
import { KinderGardenRepository } from './kinder-garden.repository';
import { KinderGardenService } from './kinder-garden.service';

@Module({
  imports: [TypeOrmModule.forFeature([KinderGardenRepository])],
  controllers: [KinderGardenController],
  providers: [KinderGardenService],
  exports: [KinderGardenService],
})
export class KinderGardenModule {}
