import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { DataService } from '../../providers/data/data.service';
import { StateService } from '../../providers/state/state.service';

import { GetActiveCustomer } from '../../../common/generated-types';
import { GET_ACTIVE_CUSTOMER } from '../../../common/graphql/documents.graphql';

@Component({
    selector: 'vsf-account-link',
    templateUrl: './account-link.component.html',
    styleUrls: ['./account-link.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountLinkComponent implements OnInit {

    activeCustomer$: Observable<GetActiveCustomer.ActiveCustomer | null | undefined>;
    constructor(private dataService: DataService,
                private stateService: StateService) {}

    ngOnInit() {
        const getActiveCustomer$ = this.dataService.query<GetActiveCustomer.Query>(GET_ACTIVE_CUSTOMER, {}, 'network-only');

        getActiveCustomer$.pipe(take(1)).subscribe(data => {
            if (data.activeCustomer) {
                this.stateService.setState('signedIn', true);
            }
        });

        this.activeCustomer$ = this.stateService.select(state => state.signedIn).pipe(
            switchMap(() => getActiveCustomer$),
            map(data => data && data.activeCustomer),
        );
    }

    userName(customer: GetActiveCustomer.ActiveCustomer): string {
        const { firstName, lastName, emailAddress } = customer;
        if (firstName && lastName) {
            return `${firstName} ${lastName}`;
        } else {
            return emailAddress;
        }
    }

}
