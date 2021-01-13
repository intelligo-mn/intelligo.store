import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitController } from '../../web/rest/unit.controller';
import { UnitRepository } from '../../repository/unit.repository';
import { UnitService } from '../../service/unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([UnitRepository])],
  controllers: [UnitController],
  providers: [UnitService],
  exports: [UnitService]
})
export class UnitModule {}
