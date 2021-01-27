import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { Authority } from "../domain/authority.entity";
import { User } from "../domain/user.entity";

export class SeedUsersRoles1570200490072 implements MigrationInterface {
  admin: Authority = { name: "ROLE_ADMIN" };
  user: Authority = { name: "ROLE_USER" };

  user2: User = {
    login: "anonymoususer",
    password: "anonymoususer",
    firstName: "Anonymous",
    lastName: "User",
    email: "anonymoususer@localhost.it",
    imageUrl: "",
    activated: true,
    langKey: "en",
    createdBy: "system",
    lastModifiedBy: "system",
  };

  adminUser: User = {
    login: "admin",
    password: "admin",
    firstName: "Administrator",
    lastName: "Administrator",
    email: "admin@localhost.it",
    imageUrl: "",
    activated: true,
    langKey: "en",
    createdBy: "system",
    lastModifiedBy: "system",
  };

  // eslint-disable-next-line
  public async up(queryRunner: QueryRunner): Promise<any> {
    const authorityRepository = getRepository("authority");

    const adminRole = await authorityRepository.save(this.admin);
    const userRole = await authorityRepository.save(this.user);

    const userRepository = getRepository("user");

    this.adminUser.authorities = [adminRole];
    this.user2.authorities = [userRole];

    await userRepository.save([this.user2, this.adminUser]);
  }

  // eslint-disable-next-line
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
