import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import {
    CollectionModificationEvent,
    DefaultLogger,
    DefaultSearchPlugin,
    InitialData,
    LogLevel,
    ProductEvent,
    ProductVariantChannelEvent,
    ProductVariantEvent,
} from '@vendure/core';
import { createTestEnvironment, registerInitializer, SqljsInitializer, testConfig } from '@vendure/testing';
import { compileUiExtensions } from '@vendure/ui-devkit/compiler';
import * as path from 'path';

import { initialData } from '../../test/src/initial-data';
import { WebhookPlugin } from '../src';

(async () => {
    testConfig.logger = new DefaultLogger({ level: LogLevel.Debug });
    registerInitializer('sqljs', new SqljsInitializer('__data__'));
    testConfig.plugins.push(
        WebhookPlugin.init({
            httpMethod: 'POST',
            delay: 3000,
            events: [
                ProductEvent,
                ProductVariantChannelEvent,
                ProductVariantEvent,
                CollectionModificationEvent,
            ],
        }),
    );
    testConfig.plugins.push(DefaultSearchPlugin);
    testConfig.plugins.push(
        AdminUiPlugin.init({
            route: 'admin',
            port: 3002,
            app: compileUiExtensions({
                outputPath: path.join(__dirname, '__admin-ui'),
                extensions: [WebhookPlugin.ui],
                devMode: true,
            }),
        }),
    );
    testConfig.apiOptions.shopApiPlayground = {};
    testConfig.apiOptions.adminApiPlayground = {};
    const { server } = createTestEnvironment(testConfig);
    await server.init({
        initialData: initialData as InitialData,
        productsCsvPath: '../test/products-import.csv',
    });
})();
