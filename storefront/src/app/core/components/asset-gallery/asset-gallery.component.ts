import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as PhotoSwipe from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

import { Asset } from '../../../common/generated-types';

export type AssetWithDimensions = Pick<Asset.Fragment, 'id' | 'preview' | 'width' | 'height'>;
@Component({
    selector: 'vsf-asset-gallery',
    templateUrl: './asset-gallery.component.html',
    styleUrls: ['./asset-gallery.component.scss'],
})
export class AssetGalleryComponent implements OnInit {
    @Input() assets: AssetWithDimensions[] = [];
    @Input() selectedAssetId: string;
    @ViewChild('mainPreview', { static: false })
    private mainPreview: ElementRef<HTMLImageElement>;

    selectedAsset?: AssetWithDimensions;
    private gallery: any;

    @ViewChild('photoswipeModal', { static: true }) modal: ElementRef<HTMLDivElement>;

    ngOnInit() {
        this.selectImage(this.selectedAssetId);
    }

    selectImage(assetId: string) {
        if (assetId != null) {
            this.selectedAsset = this.assets.find(a => a.id === assetId);
        } else {
            this.selectedAsset = this.assets[0];
        }
    }

    openImage(assetId: string) {
        const index = this.assets.findIndex(a => a.id === assetId);
        const items = this.assets.map(asset => ({
            src: asset.preview,
            msrc: asset.preview + '?preset=medium',
            w: asset.width || 1000,
            h: asset.height || 1000,
        }));
        this.gallery = new PhotoSwipe(
            this.modal.nativeElement,
            PhotoSwipeUI_Default,
            items,
            {
                index,
                showHideOpacity: true,
                shareEl: false,
                getThumbBoundsFn: () => {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    const thumbnail = this.mainPreview.nativeElement;
                    const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                    const rect = thumbnail.getBoundingClientRect();

                    return {
                        x: rect.left,
                        y: rect.top + pageYScroll,
                        w: rect.width,
                    };
                },
            },
        );
        this.gallery.init();
    }

}
