import { Component, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tx-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormButtonComponent,
      multi: true,
    },
  ],
})
export class FormButtonComponent implements ControlValueAccessor {
  @Input() text: string = '';
  @Input() disabled: boolean = true;

  formControl: FormControl = new FormControl({value: '', disabled: this.disabled});

  onTouched!: () => void;
  onChange: (value: boolean) => void = () => {};

  writeValue(obj: boolean): void {
    this.formControl.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.formControl.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
   this.disabled = isDisabled;
  }
}
