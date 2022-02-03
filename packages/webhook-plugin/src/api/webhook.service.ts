import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventBus, Logger } from '@vendure/core';
import fetch from 'node-fetch';
import { Connection } from 'typeorm';

import { WebhookPlugin } from '../webhook.plugin';

import { WebhookPerChannel } from './webhook-per-channel.entity';

/**
 * Service for updating and retrieving webhooks from db
 */
@Injectable()
export class WebhookService implements OnModuleInit {
    static queue = new Set<string>();

    constructor(private eventBus: EventBus, private connection: Connection) {}

    async getWebhook(channelId: string): Promise<WebhookPerChannel | undefined> {
        return this.connection.getRepository(WebhookPerChannel).findOne({ channelId });
    }

    async saveWebhook(webhookUrl: string, channelId: string): Promise<WebhookPerChannel | undefined> {
        const existing = await this.connection.getRepository(WebhookPerChannel).findOne({ channelId });
        if (existing) {
            await this.connection.getRepository(WebhookPerChannel).update(
                { id: existing.id },
                {
                    channelId,
                    url: webhookUrl,
                },
            );
        } else {
            await this.connection.getRepository(WebhookPerChannel).save({ channelId, url: webhookUrl });
        }
        return this.getWebhook(channelId);
    }

    /**
     * Subscribe to events specified in config
     */
    async onModuleInit(): Promise<void> {
        if (!WebhookPlugin.options || !WebhookPlugin.options.events) {
            throw Error(`Please specify VendureEvents with Webhook.init() in your Vendure config.`);
        }
        WebhookPlugin.options.events!.forEach(configuredEvent => {
            this.eventBus.ofType(configuredEvent).subscribe((event: any) => {
                const channelId = event?.ctx?.channelId! || '';
                if (!channelId) {
                    Logger.error(
                        `Cannnot trigger webhook for event ${event.constructor.name}, because there is no channelId in event.ctx`,
                    );

                    return;
                }
                this.addToQueue(channelId as string) // Async, because we dont want failures in Vendure if a webhook fails
                    .catch(e => {
                        Logger.error(
                            `Failed to call webhook for event ${event.constructor.name} for channel ${channelId}`,
                        );
                    });
            });
        });
    }

    /**
     * Call webhook for channel. Saves up events in batches for 1 second.
     * If multiple events arise within 1s, the webhook will only be called once
     */
    async addToQueue(channelId: string): Promise<void> {
        const webhookPerChannel = await this.getWebhook(channelId);
        if (!webhookPerChannel || !webhookPerChannel.url) {
            Logger.error(`No webhook defined for channel ${channelId}`);
            return;
        }
        WebhookService.queue.add(webhookPerChannel.url);
        setTimeout(this.doWebhook, WebhookPlugin.options.delay || 0);
    }

    async doWebhook(): Promise<void> {
        // Check if queue already handled
        if (WebhookService.queue.size === 0) {
            return;
        }
        // Copy queue, and empty original
        const channels: string[] = [];
        WebhookService.queue.forEach(channel => {
            channels.push(channel);
        });
        WebhookService.queue.clear();
        await Promise.all(
            channels.map(async channel => {
                try {
                    await fetch(channel!, {
                        method: WebhookPlugin.options.httpMethod,
                    });
                    Logger.error(`Successfully triggered webhook for channel ${channel}`);
                } catch (e) {
                    Logger.error(`Failed to call webhook for channel ${channel}`);
                }
            }),
        );
    }
}
