import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Address, Country, OrderAddress } from '../../../common/generated-types';

@Component({
    selector: 'vsf-address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent implements OnChanges {

    @Input() availableCountries: Country.Fragment[];
    @Input() address: OrderAddress.Fragment | Address.Fragment;

    addressForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.addressForm = this.formBuilder.group({
            fullName: '',
            company: '',
            streetLine1: ['', Validators.required],
            streetLine2: '',
            city: ['', Validators.required],
            province: '',
            postalCode: ['', Validators.required],
            countryCode: ['', Validators.required],
            phoneNumber: '',
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if ('address' in changes && this.addressForm && this.address) {
            this.addressForm.patchValue(this.address, { });
        }
        const country = this.address && this.address.country;
        if (country && this.availableCountries) {
            if (country && typeof country !== 'string') {
                this.addressForm.patchValue({
                    countryCode: country.code,
                });
            } else {
                const matchingCountry = this.availableCountries.find(c => c.name === country);
                if (matchingCountry) {
                    this.addressForm.patchValue({
                        countryCode: matchingCountry.code,
                    });
                }
            }
        }
    }

}
