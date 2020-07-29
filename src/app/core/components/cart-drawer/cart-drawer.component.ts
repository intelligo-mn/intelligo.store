import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { map, shareReplay, switchMap, take } from 'rxjs/operators';

import { DataService } from '../../providers/data/data.service';
import { StateService } from '../../providers/state/state.service';

import { ADJUST_ITEM_QUANTITY, GET_ACTIVE_ORDER, REMOVE_ITEM_FROM_CART } from './cart-drawer.graphql';
import { GetActiveOrder, AdjustItemQuantity, RemoveItemFromCart } from '../../../common/generated-types';

@Component({
    selector: 'vsf-cart-drawer',
    templateUrl: './cart-drawer.component.html',
    styleUrls: ['./cart-drawer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDrawerComponent implements OnInit {
    @HostBinding('class.visible')
    @Input() visible = false;
    @Output() close = new EventEmitter<void>();

    cart$: Observable<GetActiveOrder.ActiveOrder | null | undefined>;
    isEmpty$: Observable<boolean>;

    constructor(private dataService: DataService,
                private stateService: StateService) {}

    ngOnInit() {
        this.cart$ = merge(
            this.stateService.select(state => state.activeOrderId),
            this.stateService.select(state => state.signedIn),
        ).pipe(
            switchMap(() => this.dataService.query<GetActiveOrder.Query, GetActiveOrder.Variables>(GET_ACTIVE_ORDER, {}, 'network-only')),
            map(data => data.activeOrder),
            shareReplay(1),
        );
        this.isEmpty$ = this.cart$.pipe(
            map(cart => !cart || cart.lines.length === 0),
        );
    }

    setQuantity(event: { itemId: string; quantity: number; }) {
        if (0 < event.quantity) {
            this.adjustItemQuantity(event.itemId, event.quantity);
        } else {
            this.removeItem(event.itemId);
        }
    }

    private adjustItemQuantity(id: string, qty: number) {
        this.dataService.mutate<AdjustItemQuantity.Mutation, AdjustItemQuantity.Variables>(ADJUST_ITEM_QUANTITY, {
            id,
            qty,
        }).pipe(
            take(1),
        ).subscribe();
    }

    private removeItem(id: string) {
        this.dataService.mutate<RemoveItemFromCart.Mutation, RemoveItemFromCart.Variables>(REMOVE_ITEM_FROM_CART, {
            id,
        }).pipe(
            take(1),
        ).subscribe();
    }
}
