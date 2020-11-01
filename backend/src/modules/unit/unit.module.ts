import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitController } from './unit.controller';
import { UnitRepository } from './unit.repository';
import { UnitService } from './unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([UnitRepository])],
  controllers: [UnitController],
  providers: [UnitService],
  exports: [UnitService],
})
export class UnitModule {}
