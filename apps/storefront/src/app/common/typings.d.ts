declare interface DriftOptions {
    namespace?: string;
    showWhitespaceAtEdges?: boolean;
    containInline?: boolean;
    inlineOffsetX?: number;
    inlineOffsetY?: number;
    inlineContainer?: HTMLElement;
    sourceAttribute?: 'data-zoom';
    zoomFactor?: number;
    paneContainer?: HTMLElement;
    inlinePane?: number;
    handleTouch?: boolean;
    onShow?: () => void;
    onHide?: () => void;
    injectBaseStyles?: boolean;
    hoverDelay?: number;
    touchDelay?: number;
    hoverBoundingBox?: boolean;
    touchBoundingBox?: boolean;
    boundingBoxContainer?: HTMLElement;
}
declare class DriftZoom {
    constructor(imageElement: HTMLElement, options: DriftOptions);
    destroy(): void;
    enable(): void;
    disable(): void;
    setZoomImageURL(imageURL: string): void;
    trigger: {
        boundingBox: {
            hide(): void;
        };
    };
}

declare module 'drift-zoom' {
    export = DriftZoom;
}
