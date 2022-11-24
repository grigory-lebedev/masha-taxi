import {
  Component,
  ContentChild,
  ViewChild,
  OnInit,
  AfterViewChecked
} from '@angular/core';
import {
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';
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
    if (this.input.ngControl?.control?.hasError('required')) {
      return `${this.input.placeholder} is a required field!`;
    }
    if (this.input.ngControl?.control?.hasError('email')) {
      return `${this.input.placeholder} isn't valid!`;
    }
    if(this.input.ngControl?.control?.hasError('maxlength')) {
      let requiredLength = this.input.ngControl?.control?.errors?.['maxlength'].requiredLength;
      return `${this.input.placeholder} should be less than ${requiredLength} symbols!`;
    }
    if(this.input.ngControl?.control?.hasError('carYearLimit')) {
      return `${this.input.placeholder} isn't valid!`;
    }
    if(this.input.ngControl?.control?.hasError('noPasswordMatch')) {
      return `${this.input.placeholder} doesn't match with Password!`;
    }
    return "";
  }

  public isPasswordType(): boolean {
    return this.inputType === EInputType.password;
  }

  public togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
