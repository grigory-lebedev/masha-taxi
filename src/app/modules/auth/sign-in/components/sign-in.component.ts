import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngxs/store';
import { resetPasswordFormShowAnimation } from 'src/app/shared/animations';

import { regExpressionToCheckEmail } from 'src/app/shared/constants';
import { SignIn } from '../../ngxs/auth.actions';

@Component({
  selector: 'tx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: [resetPasswordFormShowAnimation],
})
export class SignInComponent {
  public isForgotPasswordFormVisible: boolean = false;
  public signInForm!: FormGroup;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initForm();
  }

  public onSignIn(): void {
    const { email, password } = this.signInForm.value;
    this.store.dispatch(new SignIn(email, password));
  }

  public makeResetPasswordFormVisible(): void {
    this.isForgotPasswordFormVisible = true;
  }

  public setResetPasswordFormDisplay(isFormVisible: boolean): void {
    this.isForgotPasswordFormVisible = isFormVisible;
  }

  private initForm(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(regExpressionToCheckEmail),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(6),
      ]),
      isLoggedIn: new FormControl(false),
    });
  }
}
