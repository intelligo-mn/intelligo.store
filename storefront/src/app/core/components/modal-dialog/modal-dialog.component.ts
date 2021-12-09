import { ChangeDetectorRef, Component, Inject, TemplateRef, Type } from '@angular/core';
import { Subject } from 'rxjs';

import { Dialog, DIALOG_COMPONENT, MODAL_OPTIONS, ModalOptions } from '../../providers/modal/modal-types';

import { DialogButtonsDirective } from './dialog-buttons.directive';

/**
 * This component should only be instatiated dynamically by the ModalService. It should not be used
 * directly in templates. See {@link ModalService.fromComponent} method for more detail.
 */
@Component({
    selector: 'vsf-modal-dialog',
    templateUrl: './modal-dialog.component.html',
    styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent<T extends Dialog<any>> {
    closeModal: (result?: any) => void;
    titleTemplateRef$ = new Subject<TemplateRef<any>>();
    buttonsTemplateRef$ = new Subject<TemplateRef<any>>();

    constructor(
        @Inject(DIALOG_COMPONENT) public childComponentType: Type<T>,
        @Inject(MODAL_OPTIONS) public options?: ModalOptions<T>,
    ) {}

    /**
     * This callback is invoked when the childComponentType is instantiated in the
     * template by the {@link DialogComponentOutletComponent}.
     * Once we have the instance, we can set the resolveWith function and any
     * locals which were specified in the config.
     */
    onCreate(componentInstance: T) {
        componentInstance.resolveWith = (result?: any) => {
            this.closeModal(result);
        };
        if (this.options && this.options.locals) {
            // tslint:disable-next-line
            for (const key in this.options.locals) {
                componentInstance[key] = this.options.locals[key] as T[Extract<keyof T, string>];
            }
        }
    }

    /**
     * This should be called by the {@link DialogTitleDirective} only
     */
    registerTitleTemplate(titleTemplateRef: TemplateRef<any>) {
        this.titleTemplateRef$.next(titleTemplateRef);
    }

    /**
     * This should be called by the {@link DialogButtonsDirective} only
     */
    registerButtonsTemplate(buttonsTemplateRef: TemplateRef<any>) {
        this.buttonsTemplateRef$.next(buttonsTemplateRef);
    }

    /**
     * Called when the modal is closed by clicking the X or the mask.
     */
    modalOpenChange(status: any) {
        if (status === false) {
            this.closeModal();
        }
    }
}
