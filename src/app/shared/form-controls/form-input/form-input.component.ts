import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

enum InputType {
  password = 'password',
  text = 'text',
  email = 'email',
}

@Component({
  selector: 'tx-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    },
  ],
})
export class FormInputComponent implements ControlValueAccessor {
  formControl: FormControl = new FormControl({}, [Validators.required]);
  @Input() type: string = '';
  @Input() placeholder: string = '';

  isPasswordVisible: boolean = false;
  isDisabled: boolean = false;

  onTouched = (): void => {};

  writeValue(obj: string): void {
    this.formControl.setValue(obj);
    if (this.type === InputType.email) {
      this.formControl.addValidators(Validators.email);
    }
  }
  registerOnChange(fn: any): void {
    this.formControl.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  getInputType(): InputType {
    return !this.isPasswordVisible && this.type === InputType.password
      ? InputType.password
      : InputType.text;
  }

  isPasswordType(): boolean {
    return this.type === InputType.password;
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
