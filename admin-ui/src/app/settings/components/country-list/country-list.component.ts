import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { map, mergeMap, take, tap } from 'rxjs/operators';
import { Country, Zone } from 'shared/generated-types';

import { _ } from '../../../core/providers/i18n/mark-for-extraction';
import { NotificationService } from '../../../core/providers/notification/notification.service';
import { DataService } from '../../../data/providers/data.service';
import { ModalService } from '../../../shared/providers/modal/modal.service';
import { ZoneSelectorDialogComponent } from '../zone-selector-dialog/zone-selector-dialog.component';

export interface CountryWithZones extends Country.Fragment {
    zones: Zone.Fragment[];
}

@Component({
    selector: 'vdr-country-list',
    templateUrl: './country-list.component.html',
    styleUrls: ['./country-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent implements OnInit, OnDestroy {
    countriesWithZones$: Observable<CountryWithZones[]>;
    zones$: Observable<Zone.Fragment[]>;

    selectedCountryIds: string[] = [];
    private countries: Country.Fragment[] = [];
    private destroy$ = new Subject();

    constructor(
        private dataService: DataService,
        private notificationService: NotificationService,
        private modalService: ModalService,
    ) {}

    ngOnInit() {
        const countries$ = this.dataService.settings.getCountries(9999, 0).stream$.pipe(
            tap(data => (this.countries = data.countries.items)),
            map(data => data.countries.items),
        );
        this.zones$ = this.dataService.settings.getZones().mapStream(data => data.zones);
        this.countriesWithZones$ = combineLatest(countries$, this.zones$).pipe(
            map(([countries, zones]) => {
                return countries.map(country => ({
                    ...country,
                    zones: zones.filter(z => !!z.members.find(c => c.id === country.id)),
                }));
            }),
        );
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    areAllSelected(): boolean {
        return this.selectedCountryIds.length === this.countries.length;
    }

    toggleSelectAll() {
        if (this.areAllSelected()) {
            this.selectedCountryIds = [];
        } else {
            this.selectedCountryIds = this.countries.map(v => v.id);
        }
    }

    toggleSelectCountry(country: Country.Fragment) {
        const index = this.selectedCountryIds.indexOf(country.id);
        if (-1 < index) {
            this.selectedCountryIds.splice(index, 1);
        } else {
            this.selectedCountryIds.push(country.id);
        }
    }

    isCountrySelected = (country: Country.Fragment): boolean => {
        return -1 < this.selectedCountryIds.indexOf(country.id);
    };

    addCountriesToZone() {
        this.zones$
            .pipe(
                take(1),
                mergeMap(zones => {
                    return this.modalService.fromComponent(ZoneSelectorDialogComponent, {
                        locals: {
                            allZones: zones,
                            canCreateNewZone: true,
                        },
                    });
                }),
                mergeMap(selection => {
                    if (selection && this.isZone(selection)) {
                        return this.dataService.settings
                            .addMembersToZone(selection.id, this.selectedCountryIds)
                            .pipe(map(data => data.addMembersToZone));
                    } else if (selection) {
                        return this.dataService.settings
                            .createZone({
                                name: selection.name,
                                memberIds: this.selectedCountryIds,
                            })
                            .pipe(map(data => data.createZone));
                    } else {
                        return of();
                    }
                }),
            )
            .subscribe(result => {
                if (result) {
                    this.notificationService.success(_(`settings.add-countries-to-zone-success`), {
                        countryCount: this.selectedCountryIds.length,
                        zoneName: result.name,
                    });
                    this.selectedCountryIds = [];
                }
            });
    }

    removeCountriesFromZone() {
        this.zones$
            .pipe(
                take(1),
                mergeMap(zones => {
                    return this.modalService.fromComponent(ZoneSelectorDialogComponent, {
                        locals: {
                            allZones: zones,
                            canCreateNewZone: false,
                        },
                    });
                }),
                mergeMap(selection => {
                    if (selection && this.isZone(selection)) {
                        return this.dataService.settings
                            .removeMembersFromZone(selection.id, this.selectedCountryIds)
                            .pipe(map(data => data.removeMembersFromZone));
                    } else {
                        return of();
                    }
                }),
            )
            .subscribe(result => {
                if (result) {
                    this.notificationService.success(_(`settings.remove-countries-from-zone-success`), {
                        countryCount: this.selectedCountryIds.length,
                        zoneName: result.name,
                    });
                    this.selectedCountryIds = [];
                }
            });
    }

    private isZone(input: Zone.Fragment | { name: string }): input is Zone.Fragment {
        return input.hasOwnProperty('id');
    }
}
