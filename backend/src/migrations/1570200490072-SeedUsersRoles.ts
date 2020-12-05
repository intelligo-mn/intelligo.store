import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { User } from '../domain/user.entity';
import { Authority } from '../domain/authority.entity';

export class SeedUsersRoles1570200490072 implements MigrationInterface {
    role1: Authority = { name: 'ROLE_ADMIN' };

    role2: Authority = { name: 'ROLE_USER' };

    user1: User = {
        login: 'system',
        password: 'system',
        firstName: 'System',
        lastName: 'System',
        email: 'system@localhost.it',
        imageUrl: '',
        activated: true,
        langKey: 'en',
        createdBy: 'system',
        lastModifiedBy: 'system',
    };

    user2: User = {
        login: 'anonymoususer',
        password: 'anonymoususer',
        firstName: 'Anonymous',
        lastName: 'User',
        email: 'anonymoususer@localhost.it',
        imageUrl: '',
        activated: true,
        langKey: 'en',
        createdBy: 'system',
        lastModifiedBy: 'system',
    };

    user3: User = {
        login: 'admin',
        password: 'admin',
        firstName: 'Administrator',
        lastName: 'Administrator',
        email: 'admin@localhost.it',
        imageUrl: '',
        activated: true,
        langKey: 'en',
        createdBy: 'system',
        lastModifiedBy: 'system',
    };

    user4: User = {
        login: 'user',
        password: 'user',
        firstName: 'User',
        lastName: 'User',
        email: 'user@localhost.it',
        imageUrl: '',
        activated: true,
        langKey: 'en',
        createdBy: 'system',
        lastModifiedBy: 'system',
    };

    // eslint-disable-next-line
  public async up(queryRunner: QueryRunner): Promise<any> {
        const authorityRepository = getRepository('nhi_authority');

        const adminRole = await authorityRepository.save(this.role1);
        const userRole = await authorityRepository.save(this.role2);

        const userRepository = getRepository('nhi_user');

        this.user1.authorities = [adminRole, userRole];
        this.user3.authorities = [adminRole, userRole];
        this.user4.authorities = [userRole];

        await userRepository.save([this.user1, this.user2, this.user3, this.user4]);
    }

    // eslint-disable-next-line
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
