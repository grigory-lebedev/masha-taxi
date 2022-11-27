import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { regExpressionToCheckEmail } from 'src/app/shared/constants';
import { PasswordMatchValidator } from 'src/app/shared/validators/password-match.validator';

@Component({
  selector: 'tx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  public isChecked: boolean = false;
  public signInForm: FormGroup = new FormGroup(
    {
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(regExpressionToCheckEmail),
      ]),
      password: new FormControl({ value: '', disabled: false }, [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(6),
      ]),
      isLoggedIn: new FormControl({ value: this.isChecked, disabled: false }),
    },
    PasswordMatchValidator.getPasswordMatchError
  );

  public onSignIn(): void {
    console.log(`Is signInForm valid - ${this.signInForm.valid}`);
    if (!this.signInForm.valid) {
      return;
    }
  }

  public onChangeEvent(event: any) {
    this.isChecked = !this.isChecked;
  }
}
