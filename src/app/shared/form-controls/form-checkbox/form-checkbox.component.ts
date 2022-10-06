import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'tx-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormCheckboxComponent),
      multi: true,
    },
  ],
})
export class FormCheckboxComponent implements ControlValueAccessor {
  @Input() text: string = '';

  isLoggedIn: boolean = false;

  formControl: FormControl = new FormControl(this.isLoggedIn);

  onTouched = (): void => {};
  onChange: (value: boolean) => void = () => {};

  writeValue(obj: boolean): void {
    this.isLoggedIn = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChangeEvent(event: any) {
    this.isLoggedIn = !this.isLoggedIn;
    this.onChange(this.isLoggedIn);
    this.onTouched();
  }
}
