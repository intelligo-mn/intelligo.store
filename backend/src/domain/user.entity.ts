import { Authority } from './authority.entity';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { config } from '../config';
import { EncryptionTransformer } from 'typeorm-encrypted';

@Entity('nhi_user')
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
    @Column({ default: 'en' })
    langKey?: string;

    // eslint-disable-next-line
  @ManyToMany(type => Authority)
    @JoinTable()
    authorities?: any[];

    @Column({
        type: 'varchar',
        transformer: new EncryptionTransformer({
            key: config.get('crypto.key'),
            algorithm: 'aes-256-cbc',
            ivLength: 16,
            iv: config.get('crypto.iv'),
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
