import {
  Component,
  Input,
  forwardRef,
  Output,
  EventEmitter,
  HostBinding,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NizInput),
  multi: true,
};

@Component({
  selector: 'niz-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class NizInput implements ControlValueAccessor {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  @Input() label: string;
  @Input() type: 'text' | 'email';

  @Input() invalid = false;

  @Output() nizBlur = new EventEmitter<FocusEvent>();
  @Output() nizFocus = new EventEmitter<FocusEvent>();

  @HostBinding('class') get classes(): string {
    return 'block w-full';
  }

  private _value = '';

  get value(): any {
    return this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      if (this.onChangeCallback) {
        this.onChangeCallback(this._value);
      }
    }
  }

  private onTouchedCallback: () => {};
  private onChangeCallback: (_: any) => {};

  constructor() {}

  writeValue(value: any) {
    if (value !== undefined && value !== this._value) {
      this._value = value;
    }
  }

  blur(event: FocusEvent) {
    if (this.onTouchedCallback) {
      this.onTouchedCallback();
    }
    this.nizBlur.emit(event);
  }

  focus(event: FocusEvent) {
    this.nizFocus.emit(event);
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
