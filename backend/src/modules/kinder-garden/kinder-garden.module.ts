import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KinderGardenController } from '../../web/rest/kinder-garden.controller';
import { KinderGardenRepository } from '../../repository/kinder-garden.repository';
import { KinderGardenService } from '../../service/kinder-garden.service';

@Module({
  imports: [TypeOrmModule.forFeature([KinderGardenRepository])],
  controllers: [KinderGardenController],
  providers: [KinderGardenService],
  exports: [KinderGardenService],
})
export class KinderGardenModule {}
