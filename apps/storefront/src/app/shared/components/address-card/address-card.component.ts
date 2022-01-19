import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Address, OrderAddress } from '../../../common/generated-types';
import { DataService } from '../../../core/providers/data/data.service';

@Component({
    selector: 'vsf-address-card',
    templateUrl: './address-card.component.html',
    styleUrls: ['./address-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressCardComponent {
    @Input() address: OrderAddress.Fragment | Address.Fragment;
    @Input() title = '';

    getCountryName(): string {
        if (!this.address.country) {
            return '';
        }
        if (typeof this.address.country === 'string') {
            return this.address.country;
        } else {
            return this.address.country.name;
        }
    }
}
