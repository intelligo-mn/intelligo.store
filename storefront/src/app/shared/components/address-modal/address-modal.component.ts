import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Address, Country, CreateAddress, GetAvailableCountries } from '../../../common/generated-types';
import { GET_AVAILABLE_COUNTRIES } from '../../../common/graphql/documents.graphql';
import { DataService } from '../../../core/providers/data/data.service';
import { Dialog } from '../../../core/providers/modal/modal-types';

import { CREATE_ADDRESS } from './address-modal.graphql';

@Component({
    selector: 'vsf-address-modal',
    templateUrl: './address-modal.component.html',
    styleUrls: ['./address-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class AddressModalComponent implements Dialog<Address.Fragment>, OnInit {
    resolveWith: (result?: any) => void;
    address: Address.Fragment;
    title: string;
    availableCountries$: Observable<Country.Fragment[]>;
    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.availableCountries$ = this.dataService.query<GetAvailableCountries.Query>(GET_AVAILABLE_COUNTRIES).pipe(
            map(data => data.availableCountries),
        );
    }

    save(value: any) {
        this.dataService.mutate<CreateAddress.Mutation, CreateAddress.Variables>(CREATE_ADDRESS, {
            input: value,
        }).subscribe(data => {
            this.resolveWith(data.createCustomerAddress);
        });
    }
}
