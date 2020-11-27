import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { EncryptionTransformer } from "typeorm-encrypted";
import { config } from "../config";
import { Authority } from "./authority.entity";
import { BaseEntity } from "./base/base.entity";

@Entity("nhi_user")
export class User extends BaseEntity {
  @Column({ unique: true })
  login: string;
  @Column({ nullable: true })
  firstName?: string;
  @Column({ nullable: true })
  lastName?: string;
  @Column()
  email: string;
  @Column({ default: false })
  activated?: boolean;
  @Column({ default: "en" })
  langKey?: string;

  // eslint-disable-next-line
  @ManyToMany((type) => Authority)
  @JoinTable()
  authorities?: any[];

  @Column({
    type: "varchar",
    transformer: new EncryptionTransformer({
      key: config.get("crypto.key"),
      algorithm: "aes-256-cbc",
      ivLength: 16,
      iv: config.get("crypto.iv"),
    }),
  })
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
