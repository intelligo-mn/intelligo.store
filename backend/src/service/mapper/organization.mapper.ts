import { Organization } from '../../domain/organization.entity';
import { OrganizationDTO } from '../dto/organization.dto';

/**
 * A Organization mapper object.
 */
export class OrganizationMapper {
  static fromDTOtoEntity(entityDTO: OrganizationDTO): Organization {
    if (!entityDTO) {
      return;
    }
    let entity = new Organization();
    const fields = Object.getOwnPropertyNames(entityDTO);
    fields.forEach(field => {
      entity[field] = entityDTO[field];
    });
    return entity;
  }

  static fromEntityToDTO(entity: Organization): OrganizationDTO {
    if (!entity) {
      return;
    }
    let entityDTO = new OrganizationDTO();

    const fields = Object.getOwnPropertyNames(entity);

    fields.forEach(field => {
      entityDTO[field] = entity[field];
    });

    return entityDTO;
  }
}
