import { ObjectIdColumn, PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class BaseEntity {
    @ObjectIdColumn()
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ nullable: true })
    createdBy?: string;
    @Column({ nullable: true })
    createdDate?: Date;
    @Column({ nullable: true })
    lastModifiedBy?: string;
    @Column({ nullable: true })
    lastModifiedDate?: Date;
}
