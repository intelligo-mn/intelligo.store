import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, startWith, switchMap } from 'rxjs/operators';

import { GetOrderForCheckout, GetNextOrderStates, TransitionToAddingItems } from '../../../common/generated-types';
import { DataService } from '../../../core/providers/data/data.service';
import { StateService } from '../../../core/providers/state/state.service';

import { GET_NEXT_ORDER_STATES, TRANSITION_TO_ADDING_ITEMS } from './checkout-process.graphql';

@Component({
    selector: 'vsf-checkout-process',
    templateUrl: './checkout-process.component.html',
    styleUrls: ['./checkout-process.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutProcessComponent implements OnInit {

    cart$: Observable<GetOrderForCheckout.ActiveOrder | null | undefined>;
    nextStates$: Observable<string[]>;
    activeStage$: Observable<number>;
    signedIn$: Observable<boolean>;
    constructor(private dataService: DataService,
                private stateService: StateService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
        this.signedIn$ = this.stateService.select(state => state.signedIn);
        this.cart$ = this.route.data.pipe(switchMap(data => data.activeOrder as Observable<GetOrderForCheckout.ActiveOrder>));
        this.nextStates$ = this.dataService.query<GetNextOrderStates.Query>(GET_NEXT_ORDER_STATES).pipe(
            map(data => data.nextOrderStates),
        );
        this.activeStage$ =  this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            startWith(true),
            map(() => {
                const firstChild = this.route.snapshot.firstChild;
                if (firstChild && firstChild.routeConfig) {
                    switch (firstChild.routeConfig.path) {
                        case '':
                            return 1;
                        case 'shipping':
                            return 2;
                        case 'payment':
                            return 3;
                        case 'confirmation/:code':
                            return 4;
                    }
                }
                return 1;
            }),
        );
    }

    changeShippingAddress() {
        this.dataService.mutate<TransitionToAddingItems.Mutation>(TRANSITION_TO_ADDING_ITEMS).subscribe(() => {
            this.router.navigate(['./shipping'], { relativeTo: this.route });
        });
    }

}
