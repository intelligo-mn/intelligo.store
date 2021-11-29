import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFormComponentConfig, DefaultFormComponentId } from '@vendure/common/lib/shared-types';

import { FormInputComponent } from '../../../common/component-registry-types';

/**
 * @description
 * Allows selection of a datetime. Default input for `datetime` type fields.
 *
 * @docsCategory custom-input-components
 * @docsPage default-inputs
 */
@Component({
    selector: 'vdr-date-form-input',
    templateUrl: './date-form-input.component.html',
    styleUrls: ['./date-form-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateFormInputComponent implements FormInputComponent {
    static readonly id: DefaultFormComponentId = 'date-form-input';
    @Input() readonly: boolean;
    formControl: FormControl;
    config: DefaultFormComponentConfig<'date-form-input'>;
}
