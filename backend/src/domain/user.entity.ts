import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { Authority } from "./authority.entity";
import { BaseEntity } from "./base/base.entity";

@Entity("user")
export class User extends BaseEntity {
  @ApiProperty({
    uniqueItems: true,
    example: "myuser",
    description: "User login",
  })
  @Column({ unique: true })
  login: string;
  @ApiProperty({ example: "MyUser", description: "User first name" })
  @Column()
  firstName: string;
  @ApiProperty({ example: "MyUser", description: "User last name" })
  @Column()
  lastName: string;
  @ApiProperty({ example: "myuser@localhost", description: "User email" })
  @Column({ nullable: true })
  email?: string;
  @ApiProperty({ example: "true", description: "User activation" })
  @Column()
  activated: boolean;
  @ApiProperty({ example: "en", description: "User language" })
  @Column()
  langKey: string;

  // eslint-disable-next-line
  @ManyToMany((type) => Authority)
  @JoinTable()
  @ApiProperty({
    isArray: true,
    enum: ["ROLE_USER", "ROLE_ADMIN", "ROLE_ANONYMOUS"],
    description: "Array of permissions",
  })
  authorities?: any[];

  @ApiProperty({ example: "myuser", description: "User password" })
  @Column()
  password: string;
  @Column({ nullable: true })
  imageUrl?: string;
  @Column({ nullable: true })
  activationKey?: string;
  @Column({ nullable: true })
  resetKey?: string;
  @Column({ nullable: true })
  resetDate?: Date;
}
