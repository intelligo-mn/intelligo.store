import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { DataService } from '../app/data/providers/data.service';
import { MockDataService } from '../app/data/providers/data.service.mock';
import { FormFieldControlDirective } from '../app/shared/components/form-field/form-field-control.directive';
import { FormFieldComponent } from '../app/shared/components/form-field/form-field.component';

import { MockTranslatePipe } from './translate.pipe.mock';

const DECLARATIONS = [MockTranslatePipe, FormFieldComponent, FormFieldControlDirective];

const PROVIDERS: Provider[] = [{ provide: DataService, useClass: MockDataService }];

/**
 * This module is for use in unit testing, and provides common directives and providers
 * that are used across most component, reducing the boilerplate needed to declare these
 * in each individual test.
 */
@NgModule({
    imports: [CommonModule, ClarityModule],
    exports: [...DECLARATIONS, ClarityModule],
    declarations: DECLARATIONS,
    providers: PROVIDERS,
})
export class TestingCommonModule {}
