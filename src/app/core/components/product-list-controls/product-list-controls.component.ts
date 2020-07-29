import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchProducts } from '../../../common/generated-types';
import { getRouteArrayParam } from '../../../common/utils/get-route-array-param';

export interface FacetWithValues {
    id: string;
    name: string;
    values: Array<{
        id: string;
        name: string;
        count: number;
    }>;
}

@Component({
    selector: 'vsf-product-list-controls',
    templateUrl: './product-list-controls.component.html',
    styleUrls: ['./product-list-controls.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListControlsComponent implements OnChanges {
    @Input() activeFacetValueIds: string[] = [];
    @Input() facetValues: SearchProducts.FacetValues[] | null;
    @Input() totalResults = 0;
    facets: FacetWithValues[];
    manuallyExpanded = false;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    get filtersExpanded(): boolean {
        return this.manuallyExpanded || this.activeFacetValueIds.length > 0;
    }

    ngOnChanges(changes: SimpleChanges) {
        if ('facetValues' in changes) {
            this.facets = this.groupFacetValues(this.facetValues);
        }
    }

    isActive(facetValueId: string): boolean {
        return this.activeFacetValueIds.includes(facetValueId);
    }

    toggleFacetValueIdInRoute(id: string) {
        this.router.navigate(['./', {
            facets: this.toggleFacetValueId(id),
        }], {
            queryParamsHandling: 'merge',
            relativeTo: this.route,
            state: {
                noScroll: true,
            },
        });
    }

    toggleFacetValueId(id: string): string[] {
        const existing = this.activeFacetValueIds;
        return existing.includes(id) ? existing.filter(x => x !== id) : existing.concat(id);
    }

    trackById(index: number, item: { id: string }) {
        return item.id;
    }

    private groupFacetValues(facetValues: SearchProducts.FacetValues[] | null): FacetWithValues[] {
        if (!facetValues) {
            return [];
        }
        const activeFacetValueIds = this.activeFacetValueIds;
        const facetMap = new Map<string, FacetWithValues>();
        for (const { count, facetValue: { id, name, facet } } of facetValues) {
            if (count === this.totalResults && !activeFacetValueIds.includes(id)) {
                // skip FacetValues that do not have any effect on the
                // result set and are not active
                continue;
            }
            const facetFromMap = facetMap.get(facet.id);
            if (facetFromMap) {
                facetFromMap.values.push({ id, name, count });
            } else {
                facetMap.set(facet.id, { id: facet.id, name: facet.name, values: [{ id, name, count }]});
            }
        }
        return Array.from(facetMap.values());
    }
}
