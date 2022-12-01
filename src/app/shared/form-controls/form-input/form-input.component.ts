import { Component, ContentChild, ViewChild, OnInit, AfterViewChecked } from '@angular/core';

import {MatFormField, MatFormFieldControl} from '@angular/material/form-field';

import { setErrorValidationMessage } from '../../validators/error-messages';
import { EInputType } from './../../enums/input-type';

@Component({
  selector: 'tx-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit, AfterViewChecked {
  @ContentChild(MatFormFieldControl, { static: true }) input!: MatFormFieldControl<HTMLInputElement>;
  @ViewChild(MatFormField, { static: true }) matFormField!: MatFormField;

  public placeholder: string = '';
  public isPasswordVisible: boolean = false;
  public inputType: string = EInputType.text;
  public inputValue: string = '';

  ngOnInit() {
    const htmlInput = (this.input as any)['_elementRef'].nativeElement;
    this.placeholder = htmlInput.getAttribute('placeholder');
    this.inputType = htmlInput.getAttribute('type');
    this.matFormField._control = this.input; 
  }

  ngAfterViewChecked() {
    this.inputValue = this.input.ngControl?.value;
  }

  public getInputType(): EInputType {
    return !this.isPasswordVisible && this.inputType === EInputType.password
      ? EInputType.password
      : EInputType.text;
  }

  public getErrorMessage(): string {
    return setErrorValidationMessage(this.input.ngControl?.control!, this.input.placeholder);
  }

  public isPasswordType(): boolean {
    return this.inputType === EInputType.password;
  }

  public togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
