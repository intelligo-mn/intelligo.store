import { DeepPartial } from '@vendure/common/lib/shared-types';
import { VendureEntity } from '@vendure/core';
import { Column, Entity } from 'typeorm';

/**
 * Here we define a new database entity. Passing this in to the plugin's `entities` array
 * will instruct TypeORM to create the new database table and make the entity available
 * to query in your plugin code.
 */
@Entity()
export class WebhookPerChannel extends VendureEntity {
    constructor(input?: DeepPartial<WebhookPerChannel>) {
        super(input);
    }

    @Column({ unique: true })
    channelId!: string;

    @Column()
    url!: string;
}
