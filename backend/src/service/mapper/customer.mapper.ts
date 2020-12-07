import { Customer } from '../../domain/customer.entity';
import { CustomerDTO } from '../dto/customer.dto';

/**
 * A Customer mapper object.
 */
export class CustomerMapper {
  static fromDTOtoEntity(entityDTO: CustomerDTO): Customer {
    if (!entityDTO) {
      return;
    }
    let entity = new Customer();
    const fields = Object.getOwnPropertyNames(entityDTO);
    fields.forEach(field => {
      entity[field] = entityDTO[field];
    });
    return entity;
  }

  static fromEntityToDTO(entity: Customer): CustomerDTO {
    if (!entity) {
      return;
    }
    let entityDTO = new CustomerDTO();

    const fields = Object.getOwnPropertyNames(entity);

    fields.forEach(field => {
      entityDTO[field] = entity[field];
    });

    return entityDTO;
  }
}
