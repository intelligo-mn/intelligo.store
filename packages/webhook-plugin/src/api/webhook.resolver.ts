import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, RequestContext } from '@vendure/core';
import { Permission } from '@vendure/core';

import { WebhookService } from './webhook.service';

/**
 * Graphql resolvers for retrieving and updating webhook for channel
 */
@Resolver()
export class WebhookResolver {
    constructor(private webhookService: WebhookService) {}

    @Query()
    @Allow(Permission.ReadSettings)
    async webhook(@Ctx() ctx: RequestContext): Promise<string | undefined> {
        const webhook = await this.webhookService.getWebhook(ctx.channelId as string);
        return webhook?.url;
    }

    @Mutation()
    @Allow(Permission.UpdateSettings)
    async updateWebhook(@Ctx() ctx: RequestContext, @Args('url') url: string): Promise<string | undefined> {
        const webhook = await this.webhookService.saveWebhook(url, ctx.channelId as string);
        return webhook?.url;
    }
}
