import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'vsf-product-search-bar',
    templateUrl: './product-search-bar.component.html',
    styleUrls: ['./product-search-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSearchBarComponent implements OnInit, OnDestroy {
    /** If true, searches as you type */
    @Input() autoSearch = false;

    searchTerm = new FormControl('');
    private subscription: Subscription;
    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        if (this.autoSearch) {
            this.subscription = this.searchTerm.valueChanges.pipe(
                debounceTime(250),
            ).subscribe(term => this.doSearch(term));
        }
    }

    doSearch(term: string) {
        this.router.navigate(['/search'], {
            queryParams: { search: term },
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
        this.searchTerm.setValue('', { emitEvent: false });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
