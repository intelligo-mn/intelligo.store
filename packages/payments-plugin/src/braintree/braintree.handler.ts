import { LanguageCode } from '@vendure/common/lib/generated-types';
import { Injector, Logger, PaymentMethodHandler } from '@vendure/core';

import { extractMetadataFromTransaction, getGateway } from './braintree-common';
import { BRAINTREE_PLUGIN_OPTIONS, loggerCtx } from './constants';
import { BraintreePluginOptions } from './types';

let options: BraintreePluginOptions;
/**
 * The handler for Braintree payments.
 */
export const braintreePaymentMethodHandler = new PaymentMethodHandler({
    code: 'braintree',
    description: [{ languageCode: LanguageCode.en, value: 'Braintree payments' }],
    args: {
        merchantId: { type: 'string', label: [{ languageCode: LanguageCode.en, value: 'Merchant ID' }] },
        publicKey: { type: 'string', label: [{ languageCode: LanguageCode.en, value: 'Public Key' }] },
        privateKey: { type: 'string', label: [{ languageCode: LanguageCode.en, value: 'Private Key' }] },
    },
    init(injector: Injector) {
        options = injector.get<BraintreePluginOptions>(BRAINTREE_PLUGIN_OPTIONS);
    },
    async createPayment(ctx, order, amount, args, metadata) {
        const gateway = getGateway(args, options);
        try {
            const response = await gateway.transaction.sale({
                amount: (amount / 100).toString(10),
                orderId: order.code,
                paymentMethodNonce: metadata.nonce,
                options: {
                    submitForSettlement: true,
                },
            });
            if (!response.success) {
                return {
                    amount,
                    state: 'Declined' as const,
                    transactionId: response.transaction.id,
                    errorMessage: response.message,
                    metadata: extractMetadataFromTransaction(response.transaction),
                };
            }
            return {
                amount,
                state: 'Settled' as const,
                transactionId: response.transaction.id,
                metadata: extractMetadataFromTransaction(response.transaction),
            };
        } catch (e) {
            Logger.error(e, loggerCtx);
            return {
                amount: order.total,
                state: 'Error' as const,
                transactionId: '',
                errorMessage: e.toString(),
                metadata: e,
            };
        }
    },

    settlePayment() {
        return {
            success: true,
        };
    },

    async createRefund(ctx, input, total, order, payment, args) {
        const gateway = getGateway(args, options);
        const response = await gateway.transaction.refund(payment.transactionId, (total / 100).toString(10));
        if (!response.success) {
            return {
                state: 'Failed' as const,
                transactionId: response.transaction.id,
                metadata: response,
            };
        }
        return {
            state: 'Settled' as const,
            transactionId: response.transaction.id,
            metadata: response,
        };
    },
});
