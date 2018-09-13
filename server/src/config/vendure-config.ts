import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { LanguageCode } from 'shared/generated-types';
import { API_PATH, API_PORT } from 'shared/shared-constants';
import { CustomFields, DeepPartial } from 'shared/shared-types';
import { ConnectionOptions } from 'typeorm';

import { ReadOnlyRequired } from '../common/types/common-types';

import { AssetPreviewStrategy } from './asset-preview-strategy/asset-preview-strategy';
import { DefaultAssetPreviewStrategy } from './asset-preview-strategy/default-asset-preview-strategy';
import { AssetStorageStrategy } from './asset-storage-strategy/asset-storage-strategy';
import { LocalAssetStorageStrategy } from './asset-storage-strategy/local-asset-storage-strategy';
import { AutoIncrementIdStrategy } from './entity-id-strategy/auto-increment-id-strategy';
import { EntityIdStrategy } from './entity-id-strategy/entity-id-strategy';
import { mergeConfig } from './merge-config';

export interface VendureConfig {
    /**
     * Disable authentication & permissions checks.
     * NEVER set the to true in production. It exists
     * only to aid the ease of development.
     */
    disableAuth?: boolean;
    /**
     * The name of the property which contains the token of the
     * active channel. This property can be included either in
     * the request header or as a query string.
     */
    channelTokenKey?: string;
    /**
     * The default languageCode of the app.
     */
    defaultLanguageCode?: LanguageCode;
    /**
     * The path to the GraphQL API.
     */
    apiPath?: string;
    /**
     * Set the CORS handling for the server.
     */
    cors?: boolean | CorsOptions;
    /**
     * Which port the Vendure server should listen on.
     */
    port: number;
    /**
     * The secret used for signing each JWT used in authenticating users.
     * In production applications, this should not be stored as a string in
     * source control for security reasons, but may be loaded from an external
     * file not under source control, or from an environment variable, for example.
     * See https://stackoverflow.com/a/30090120/772859
     */
    jwtSecret: string;
    /**
     * Defines the strategy used for both storing the primary keys of entities
     * in the database, and the encoding & decoding of those ids when exposing
     * entities via the API. The default uses a simple auto-increment integer
     * strategy.
     */
    entityIdStrategy?: EntityIdStrategy<any>;
    /**
     * Defines the strategy used for storing uploaded binary files. By default files are
     * persisted to the local file system.
     */
    assetStorageStrategy?: AssetStorageStrategy;
    /**
     * Defines the strategy used for creating preview images of uploaded assets. The default
     * strategy resizes images based on maximum dimensions and outputs a sensible default
     * preview image for other file types.
     */
    assetPreviewStrategy?: AssetPreviewStrategy;
    /**
     * The connection options used by TypeORM to connect to the database.
     */
    dbConnectionOptions: ConnectionOptions;
    /**
     * Defines custom fields which can be used to extend the built-in entities.
     */
    customFields?: CustomFields;
    /**
     * The max file size in bytes for uploaded assets.
     */
    uploadMaxFileSize?: number;
}

const defaultConfig: ReadOnlyRequired<VendureConfig> = {
    disableAuth: false,
    channelTokenKey: 'vendure-token',
    defaultLanguageCode: LanguageCode.en,
    port: API_PORT,
    cors: false,
    jwtSecret: 'secret',
    apiPath: API_PATH,
    entityIdStrategy: new AutoIncrementIdStrategy(),
    // tslint:disable-next-line:no-non-null-assertion
    assetStorageStrategy: new LocalAssetStorageStrategy('assets'),
    assetPreviewStrategy: new DefaultAssetPreviewStrategy({ maxHeight: 50, maxWidth: 50 }),
    dbConnectionOptions: {
        type: 'mysql',
    },
    uploadMaxFileSize: 20971520,
    customFields: {
        Address: [],
        Customer: [],
        Facet: [],
        FacetValue: [],
        Product: [],
        ProductOption: [],
        ProductOptionGroup: [],
        ProductVariant: [],
        User: [],
    } as ReadOnlyRequired<CustomFields>,
};

let activeConfig = defaultConfig;

/**
 * Override the default config by merging in the supplied values. Should only be used prior to
 * bootstrapping the app.
 */
export function setConfig(userConfig: DeepPartial<VendureConfig>): void {
    activeConfig = mergeConfig(activeConfig, userConfig);
}

/**
 * Returns the app config object. In general this function should only be
 * used before bootstrapping the app. In all other contexts, the {@link ConfigService}
 * should be used to access config settings.
 */
export function getConfig(): ReadOnlyRequired<VendureConfig> {
    return activeConfig;
}
