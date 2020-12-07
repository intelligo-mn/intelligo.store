import { User } from '../../domain/user.entity';
import { UserDTO } from '../dto/user.dto';

/**
 * An User mapper object.
 */
export class UserMapper {
    static fromDTOtoEntity(userDTO: UserDTO): User {
        if (!userDTO) {
            return;
        }
        const user = new User();
        const fields = Object.getOwnPropertyNames(userDTO);
        fields.forEach(field => {
            user[field] = userDTO[field];
        });
        return user;
    }

    static fromEntityToDTO(user: User): UserDTO {
        if (!user) {
            return;
        }
        const userDTO = new UserDTO();

        const fields = Object.getOwnPropertyNames(user);

        fields.forEach(field => {
            userDTO[field] = user[field];
        });

        return userDTO;
    }
}
