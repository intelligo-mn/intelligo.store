import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GetCollections } from '../../../common/generated-types';
import { GET_COLLECTIONS } from '../../../common/graphql/documents.graphql';
import { DataService } from '../../providers/data/data.service';
import { StateService } from '../../providers/state/state.service';
import { arrayToTree, RootNode, TreeNode } from '../collections-menu/array-to-tree';

@Component({
    selector: 'vsf-collections-menu-mobile',
    templateUrl: './collections-menu-mobile.component.html',
    styleUrls: ['./collections-menu-mobile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionsMenuMobileComponent implements OnInit {
    @HostBinding('class.visible')
    @Input() visible = false;

    collectionTree$: Observable<RootNode<GetCollections.Items>>;
    selected0: string | null = null;
    selected1: string | null = null;

    constructor(private router: Router,
                private stateService: StateService,
                private dataService: DataService) { }

    ngOnInit() {
        this.collectionTree$ = this.dataService.query<GetCollections.Query, GetCollections.Variables>(GET_COLLECTIONS, {
            options: {},
        }).pipe(
            map(data => arrayToTree(data.collections.items)),
        );
    }

    onL0Click(event: TouchEvent, collection: TreeNode<GetCollections.Items>) {
        this.expandOrNavigate(0, event, collection);
    }

    onL1Click(event: TouchEvent, collection: TreeNode<GetCollections.Items>) {
        this.expandOrNavigate(1, event, collection);
    }

    close() {
        this.stateService.setState('mobileNavMenuIsOpen', false);
    }

    private expandOrNavigate(level: 0 | 1, event: TouchEvent, collection: TreeNode<GetCollections.Items>) {
        if (collection.children.length && this.selected1 !== collection.id) {
            if (level === 0) {
                this.selected0 = collection.id;
                this.selected1 = null;
            } else {
                this.selected1 = collection.id;
            }
            event.preventDefault();
            event.stopImmediatePropagation();
        } else {
            this.router.navigate(['/category/', collection.slug]);
            this.close();
        }
    }
}
