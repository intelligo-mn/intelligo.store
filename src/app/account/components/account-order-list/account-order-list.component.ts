import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GetOrderList, SortOrder } from '../../../common/generated-types';
import { DataService } from '../../../core/providers/data/data.service';

import { GET_ORDER_LIST } from './account-order-list.graphql';

@Component({
    selector: 'vsf-account-order-list',
    templateUrl: './account-order-list.component.html',
    styleUrls: ['./account-order-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountOrderListComponent implements OnInit {

    orders$: Observable<GetOrderList.Items[] | null>;
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.orders$ = this.dataService.query<GetOrderList.Query, GetOrderList.Variables>(GET_ORDER_LIST, {
            options: {
                filter: {
                    active: {
                        eq: false,
                    },
                },
                sort: {
                    createdAt: SortOrder.DESC,
                },
            },
        }).pipe(
            map(data => data.activeCustomer && data.activeCustomer.orders.items),
        );
    }

}
