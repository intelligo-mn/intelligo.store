import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnDestroy,
    OnInit,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, map, takeUntil } from 'rxjs/operators';

import { GetCollections } from '../../../common/generated-types';
import { GET_COLLECTIONS } from '../../../common/graphql/documents.graphql';
import { DataService } from '../../../core/providers/data/data.service';

import { arrayToTree, RootNode, TreeNode } from './array-to-tree';

@Component({
    selector: 'vsf-collections-menu',
    templateUrl: './collections-menu.component.html',
    styleUrls: ['./collections-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionsMenuComponent implements OnInit, OnDestroy {

    collectionTree$: Observable<RootNode<GetCollections.Items>>;
    activeCollection: TreeNode<GetCollections.Items> | null;

    @ViewChild('menuTemplate', { read: TemplateRef, static: false }) menuTemplate: TemplateRef<any>;

    private closeFn: (() => any) | null = null;
    private overlayIsOpen$ = new Subject<boolean>();
    private setActiveCollection$ = new Subject<TreeNode<GetCollections.Items>>();
    private destroy$ = new Subject();

    constructor(@Inject(DOCUMENT) private document: Document,
                private dataService: DataService,
                private overlay: Overlay,
                private viewContainerRef: ViewContainerRef) { }

    ngOnInit() {
        this.collectionTree$ = this.dataService.query<GetCollections.Query, GetCollections.Variables>(GET_COLLECTIONS, {
            options: {},
        }).pipe(
            map(data => arrayToTree(data.collections.items)),
        );

        this.overlayIsOpen$.pipe(
            debounceTime(50),
            takeUntil(this.destroy$),
        ).subscribe((val) => {
            if (val) {
                this.openOverlay();
            } else {
                this.closeOverlay();
            }
        });

        this.setActiveCollection$.pipe(
            debounceTime(0),
            takeUntil(this.destroy$),
        ).subscribe(val => {
            this.activeCollection = val;
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onTopLevelClick(event: MouseEvent, collection: TreeNode<GetCollections.Items>) {
        if (collection.children.length) {
            event.preventDefault();
            event.stopImmediatePropagation();
            this.onMouseEnter(collection);
            this.registerDocumentTouchHandler();
        } else {
            this.closeOverlay();
        }
    }

    captureTouchStart(event: TouchEvent) {
        event.stopPropagation();
    }

    onMouseEnter(collection: TreeNode<GetCollections.Items>) {
        this.setActiveCollection$.next(collection);
        this.overlayIsOpen$.next(true);
    }

    close(event: any) {
        this.overlayIsOpen$.next(false);
    }

    private openOverlay() {
        if (this.closeFn) {
            return;
        }
        const positionStrategy = this.overlay.position().flexibleConnectedTo(this.viewContainerRef.element)
            .withPositions([{
                originX : 'center',
                originY : 'bottom',
                overlayX: 'center',
                overlayY: 'top',
            }])
            .withPush(false);
        const scrollStrategy = this.overlay.scrollStrategies.reposition();
        const overlayRef = this.overlay.create(new OverlayConfig({
            scrollStrategy,
            positionStrategy,
            minWidth: '100vw',
            maxHeight: 500,
        }));
        this.closeFn = () => {
            overlayRef.dispose();
            this.closeFn = null;
        };
        const dropdown = overlayRef.attach(new TemplatePortal(this.menuTemplate, this.viewContainerRef));
    }

    private closeOverlay() {
        if (typeof this.closeFn === 'function') {
            this.closeFn();
        }
    }

    private registerDocumentTouchHandler = () => {
        const handler = () => {
            this.closeOverlay();
            this.document.removeEventListener('touchstart', handler);
        };
        this.document.addEventListener('touchstart', handler);
    }
}
