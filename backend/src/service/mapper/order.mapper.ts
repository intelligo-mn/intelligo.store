import { Order } from '../../domain/order.entity';
import { OrderDTO } from '../dto/order.dto';

/**
 * A Order mapper object.
 */
export class OrderMapper {
  static fromDTOtoEntity(entityDTO: OrderDTO): Order {
    if (!entityDTO) {
      return;
    }
    let entity = new Order();
    const fields = Object.getOwnPropertyNames(entityDTO);
    fields.forEach(field => {
      entity[field] = entityDTO[field];
    });
    return entity;
  }

  static fromEntityToDTO(entity: Order): OrderDTO {
    if (!entity) {
      return;
    }
    let entityDTO = new OrderDTO();

    const fields = Object.getOwnPropertyNames(entity);

    fields.forEach(field => {
      entityDTO[field] = entity[field];
    });

    return entityDTO;
  }
}
