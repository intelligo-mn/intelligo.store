import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AddPayment } from '../../../common/generated-types';
import { DataService } from '../../../core/providers/data/data.service';
import { StateService } from '../../../core/providers/state/state.service';

import { ADD_PAYMENT } from './checkout-payment.graphql';

@Component({
    selector: 'vsf-checkout-payment',
    templateUrl: './checkout-payment.component.html',
    styleUrls: ['./checkout-payment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutPaymentComponent {
    cardNumber: string;
    expMonth: number;
    expYear: number;

    constructor(private dataService: DataService,
                private stateService: StateService,
                private router: Router,
                private route: ActivatedRoute) { }

    getMonths(): number[] {
        return Array.from({ length: 12 }).map((_, i) => i + 1);
    }

    getYears(): number[] {
        const year = new Date().getFullYear();
        return Array.from({ length: 10 }).map((_, i) => year + i);
    }

    completeOrder() {
        this.dataService.mutate<AddPayment.Mutation, AddPayment.Variables>(ADD_PAYMENT, {
            input: {
                method: 'example-payment-provider',
                metadata: {
                    foo: 'bar',
                },
            },
        })
            .subscribe(async result => {
                const order = result.addPaymentToOrder;
                if (order && (order.state === 'PaymentSettled' || order.state === 'PaymentAuthorized')) {
                    await new Promise(resolve => setTimeout(() => {
                        this.stateService.setState('activeOrderId', null);
                        resolve();
                    }, 500));
                    this.router.navigate(['../confirmation', order.code], { relativeTo: this.route });
                }
            });
    }
}
