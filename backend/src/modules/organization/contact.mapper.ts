import { Contact } from '../../domain/contact.entity';
import { ContactDTO } from '../../domain/dto/contact.dto';

/**
 * A Contact mapper object.
 */
export class ContactMapper {
  static fromDTOtoEntity(entityDTO: ContactDTO): Contact {
    if (!entityDTO) {
      return;
    }
    let entity = new Contact();
    const fields = Object.getOwnPropertyNames(entityDTO);
    fields.forEach(field => {
      entity[field] = entityDTO[field];
    });
    return entity;
  }

  static fromEntityToDTO(entity: Contact): ContactDTO {
    if (!entity) {
      return;
    }
    let entityDTO = new ContactDTO();

    const fields = Object.getOwnPropertyNames(entity);

    fields.forEach(field => {
      entityDTO[field] = entity[field];
    });

    return entityDTO;
  }
}
