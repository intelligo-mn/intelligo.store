import { Product } from '../../domain/product.entity';
import { ProductDTO } from '../../domain/dto/product.dto';

/**
 * A Product mapper object.
 */
export class ProductMapper {
  static fromDTOtoEntity(entityDTO: ProductDTO): Product {
    if (!entityDTO) {
      return;
    }
    let entity = new Product();
    const fields = Object.getOwnPropertyNames(entityDTO);
    fields.forEach(field => {
      entity[field] = entityDTO[field];
    });
    return entity;
  }

  static fromEntityToDTO(entity: Product): ProductDTO {
    if (!entity) {
      return;
    }
    let entityDTO = new ProductDTO();

    const fields = Object.getOwnPropertyNames(entity);

    fields.forEach(field => {
      entityDTO[field] = entity[field];
    });

    return entityDTO;
  }
}
