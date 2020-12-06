import { OrderItem } from '../../domain/order-item.entity';
import { OrderItemDTO } from '../dto/order-item.dto';

/**
 * A OrderItem mapper object.
 */
export class OrderItemMapper {
  static fromDTOtoEntity(entityDTO: OrderItemDTO): OrderItem {
    if (!entityDTO) {
      return;
    }
    let entity = new OrderItem();
    const fields = Object.getOwnPropertyNames(entityDTO);
    fields.forEach(field => {
      entity[field] = entityDTO[field];
    });
    return entity;
  }

  static fromEntityToDTO(entity: OrderItem): OrderItemDTO {
    if (!entity) {
      return;
    }
    let entityDTO = new OrderItemDTO();

    const fields = Object.getOwnPropertyNames(entity);

    fields.forEach(field => {
      entityDTO[field] = entity[field];
    });

    return entityDTO;
  }
}
