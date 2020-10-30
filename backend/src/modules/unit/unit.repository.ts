import Unit from "src/domain/unit.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Unit)
export class UnitRepository extends Repository<Unit> {}
