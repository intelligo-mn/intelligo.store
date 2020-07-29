import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GetCustomerAddresses } from '../../../common/generated-types';
import { GET_CUSTOMER_ADDRESSES } from '../../../common/graphql/documents.graphql';
import { DataService } from '../../../core/providers/data/data.service';

@Component({
    selector: 'vsf-account-address-book',
    templateUrl: './account-address-book.component.html',
    styleUrls: ['./account-address-book.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountAddressBookComponent implements OnInit {

    addresses$: Observable<GetCustomerAddresses.Addresses[] | null>;
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.addresses$ = this.dataService.query<GetCustomerAddresses.Query>(GET_CUSTOMER_ADDRESSES).pipe(
            map(data => data.activeCustomer && data.activeCustomer.addresses),
        );
    }

}
