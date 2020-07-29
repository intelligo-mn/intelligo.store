import { InjectionToken, Type } from '@angular/core';

export const DIALOG_COMPONENT = new InjectionToken<Type<Dialog>>('DIALOG_COMPONENT');
export const MODAL_OPTIONS = new InjectionToken<ModalOptions<any>>('MODAL_OPTIONS');

/**
 * Any component intended to be used with the ModalService.fromComponent() method must implement
 * this interface.
 */
export interface Dialog<R = any> {
    /**
     * Function to be invoked in order to close the dialog when the action is complete.
     * The Observable returned from the .fromComponent() method will emit the value passed
     * to this method and then complete.
     */
    resolveWith: (result?: R) => void;
}

export interface DialogButtonConfig<T> {
    label: string;
    type: 'seconday' | 'primary' | 'danger';
    returnValue?: T;
}

/**
 * Configures a generic modal dialog.
 */
export interface DialogConfig<T> {
    title: string;
    body?: string;
    buttons: Array<DialogButtonConfig<T>>;
}

/**
 * Options to configure the behaviour of the modal.
 */
export interface ModalOptions<T> {
    /** Sets the width of the dialog */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * When true, the "x" icon is shown
     * and clicking it or the mask will close the dialog
     */
    closable?: boolean;
    /**
     * Values to be passed directly to the component.
     */
    locals?: Partial<T>;
}
