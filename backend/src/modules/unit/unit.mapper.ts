import { Unit } from '../../domain/unit.entity';
import { UnitDTO } from '../../domain/dto/unit.dto';

/**
 * A Unit mapper object.
 */
export class UnitMapper {
  static fromDTOtoEntity(entityDTO: UnitDTO): Unit {
    if (!entityDTO) {
      return;
    }
    let entity = new Unit();
    const fields = Object.getOwnPropertyNames(entityDTO);
    fields.forEach(field => {
      entity[field] = entityDTO[field];
    });
    return entity;
  }

  static fromEntityToDTO(entity: Unit): UnitDTO {
    if (!entity) {
      return;
    }
    let entityDTO = new UnitDTO();

    const fields = Object.getOwnPropertyNames(entity);

    fields.forEach(field => {
      entityDTO[field] = entity[field];
    });

    return entityDTO;
  }
}
