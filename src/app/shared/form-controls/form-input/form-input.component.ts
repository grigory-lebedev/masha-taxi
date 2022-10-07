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

enum InputType {
  password = 'password',
  text = 'text',
  email = 'email',
}

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
  public inputType: string = InputType.text;
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

  public getInputType(): InputType {
    return !this.isPasswordVisible && this.inputType === InputType.password
      ? InputType.password
      : InputType.text;
  }

  public isPasswordType(): boolean {
    return this.inputType === InputType.password;
  }

  public togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    //(this.input as any)['_elementRef'].nativeElement.classList.add("mat-focused");
  }
}
