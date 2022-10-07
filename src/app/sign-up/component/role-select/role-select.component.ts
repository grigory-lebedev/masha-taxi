import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { MAT_SELECT_CONFIG } from '@angular/material/select';

@Component({
  selector: 'tx-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RoleSelectComponent),
      multi: true,
    },
    {
      provide: MAT_SELECT_CONFIG,
      useValue: { overlayPanelClass: 'custom-select' },
    },
  ],
})
export class RoleSelectComponent implements ControlValueAccessor {
  public formControl: FormControl = new FormControl({}, [Validators.required]);

  public selectItems = [
    { id: 1, value: 'Client' },
    { id: 2, value: 'Driver' },
  ];

  public isDisabled: boolean = false;

  public onTouched = (): void => {};

  public writeValue(obj: string): void {
    this.formControl.setValue(obj);
  }
  public registerOnChange(fn: any): void {
    this.formControl.valueChanges.subscribe(fn);
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
