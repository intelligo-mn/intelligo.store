import { OrderPack } from '../../domain/order-pack.entity';
import { OrderPackDTO } from '../../domain/dto/order-pack.dto';

/**
 * A OrderPack mapper object.
 */
export class OrderPackMapper {
  static fromDTOtoEntity(entityDTO: OrderPackDTO): OrderPack {
    if (!entityDTO) {
      return;
    }
    let entity = new OrderPack();
    const fields = Object.getOwnPropertyNames(entityDTO);
    fields.forEach(field => {
      entity[field] = entityDTO[field];
    });
    return entity;
  }

  static fromEntityToDTO(entity: OrderPack): OrderPackDTO {
    if (!entity) {
      return;
    }
    let entityDTO = new OrderPackDTO();

    const fields = Object.getOwnPropertyNames(entity);

    fields.forEach(field => {
      entityDTO[field] = entity[field];
    });

    return entityDTO;
  }
}
