import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { GetAvailableCountries, GetCustomerAddresses, UpdateAddress, UpdateAddressInput } from '../../../common/generated-types';
import { GET_AVAILABLE_COUNTRIES, GET_CUSTOMER_ADDRESSES } from '../../../common/graphql/documents.graphql';
import { notNullOrUndefined } from '../../../common/utils/not-null-or-undefined';
import { DataService } from '../../../core/providers/data/data.service';
import { AddressFormComponent } from '../../../shared/components/address-form/address-form.component';

import { UPDATE_ADDRESS } from './account-address-detail.graphql';

@Component({
    selector: 'vsf-account-address-detail',
    templateUrl: './account-address-detail.component.html',
    styleUrls: ['./account-address-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountAddressDetailComponent implements OnInit {

    address$: Observable<GetCustomerAddresses.Addresses | undefined>;
    availableCountries$: Observable<GetAvailableCountries.AvailableCountries[]>;
    @ViewChild('addressForm', { static: true }) private addressForm: AddressFormComponent;

    constructor(private route: ActivatedRoute, private dataService: DataService) { }

    ngOnInit() {
        this.address$ = this.route.paramMap.pipe(
            map(pm => pm.get('id')),
            filter(notNullOrUndefined),
            switchMap(id =>
                this.dataService.query<GetCustomerAddresses.Query>(GET_CUSTOMER_ADDRESSES).pipe(
                    map(data => data.activeCustomer && data.activeCustomer.addresses),
                    filter(notNullOrUndefined),
                    map(addresses => addresses.find(address => address.id === id)),
                ),
            ),
        );
        this.availableCountries$ = this.dataService.query<GetAvailableCountries.Query>(GET_AVAILABLE_COUNTRIES).pipe(
            map(data => data.availableCountries),
        );
    }

    updateAddress() {
        const id = this.route.snapshot.paramMap.get('id');
        if (!id) {
            return;
        }
        const formValue = this.addressForm.addressForm.value;
        const input: UpdateAddressInput = {
            id,
            city: formValue.city,
            company: formValue.company,
            countryCode: formValue.countryCode,
            customFields: formValue.customFields,
            defaultBillingAddress: formValue.defaultBillingAddress,
            defaultShippingAddress: formValue.defaultShippingAddress,
            fullName: formValue.fullName,
            phoneNumber: formValue.phoneNumber,
            postalCode: formValue.postalCode,
            province: formValue.province,
            streetLine1: formValue.streetLine1,
            streetLine2: formValue.streetLine2,
        };
        this.dataService.mutate<UpdateAddress.Mutation, UpdateAddress.Variables>(UPDATE_ADDRESS, {
            input,
        }).subscribe(() => {
            this.addressForm.addressForm.markAsPristine();
        });
    }

}
