import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { from, interval, merge, Observable, timer, zip } from 'rxjs';
import { delay, distinctUntilChanged, map, share, switchMap } from 'rxjs/operators';

import { GetCartTotals } from '../../../common/generated-types';
import { DataService } from '../../providers/data/data.service';
import { StateService } from '../../providers/state/state.service';

import { GET_CART_TOTALS } from './cart-toggle.graphql';

@Component({
    selector: 'vsf-cart-toggle',
    templateUrl: './cart-toggle.component.html',
styleUrls: ['./cart-toggle.component.scss'],
    })
export class CartToggleComponent implements OnInit {
    @Output() toggle = new EventEmitter<void>();
    cart$: Observable<{ total: number; quantity: number; }>;
    cartChangeIndication$: Observable<boolean>;

    constructor(private dataService: DataService,
                private stateService: StateService) {}

    ngOnInit() {
        this.cart$ =  merge(
            this.stateService.select(state => state.activeOrderId),
            this.stateService.select(state => state.signedIn),
        ).pipe(
            switchMap(() => this.dataService.query<GetCartTotals.Query>(GET_CART_TOTALS, {}, 'network-only')),
            map(({ activeOrder }) => {
                return {
                    total: activeOrder ? activeOrder.total : 0,
                    quantity: activeOrder ? activeOrder.lines.reduce((qty, line) => qty + line.quantity, 0) : 0,
                };
            }),
            share(),
        );
        this.cartChangeIndication$ = this.cart$.pipe(
            map(cart => cart.quantity),
            distinctUntilChanged(),
            switchMap(() => zip(
                from([true, false]),
                timer(0, 1000),
                val => val,
                ),
            ),
        );
    }
}
