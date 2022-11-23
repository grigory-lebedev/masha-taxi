import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { MAT_SELECT_CONFIG } from '@angular/material/select';
import { carColors, roles } from '../../constants';
import { ISelect } from '../../models/select';

@Component({
  selector: 'tx-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormSelectComponent),
      multi: true,
    },
    {
      provide: MAT_SELECT_CONFIG,
      useValue: { overlayPanelClass: 'custom-select' },
    },
  ],
})
export class FormSelectComponent implements ControlValueAccessor {
  @Input() placeholder: string = ''; 
  @Input() selectItems: ISelect[] = [];
  public formControl: FormControl = new FormControl({}, [Validators.required]);

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
