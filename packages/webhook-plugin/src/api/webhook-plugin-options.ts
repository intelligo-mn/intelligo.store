import { VendureEvent } from '@vendure/core';

export interface WebhookPluginOptions {
    /**
     * Trigger webhooks if one of these events occur.
     * Does not support event.type yet
     *
     * Be carefull with CollectionModificationEvent,
     * as it is triggered multiple times (~8) for
     * certain events
     */
    events: Array<new (...args: any[]) => VendureEvent>;
    /**
     * Do an empty POST or a GET request
     */
    httpMethod: 'GET' | 'POST';
    /**
     * Wait for more events for the same channel before calling webhook
     * Delay is in ms
     */
    delay?: number;
}
