import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import path from 'path';

import { schema } from './api/schema';
import { WebhookPerChannel } from './api/webhook-per-channel.entity';
import { WebhookPluginOptions } from './api/webhook-plugin-options';
import { WebhookResolver } from './api/webhook.resolver';
import { WebhookService } from './api/webhook.service';

/**
 * Calls a configurable webhook when configured events arise.
 * 1 webhook per channel is configurable
 */
@VendurePlugin({
    imports: [PluginCommonModule],
    entities: [WebhookPerChannel],
    providers: [WebhookService],
    adminApiExtensions: {
        schema,
        resolvers: [WebhookResolver],
    },
})
export class WebhookPlugin {
    static options: WebhookPluginOptions;

    static init(options: WebhookPluginOptions): typeof WebhookPlugin {
        this.options = options;
        return WebhookPlugin;
    }
    static ui: AdminUiExtension = {
        extensionPath: path.join(__dirname, 'ui'),
        ngModules: [
            {
                type: 'lazy',
                route: 'webhook',
                ngModuleFileName: 'webhook.module.ts',
                ngModuleName: 'WebhookModule',
            },
            {
                type: 'shared',
                ngModuleFileName: 'webhook-nav.module.ts',
                ngModuleName: 'WebhookNavModule',
            },
        ],
    };
}
