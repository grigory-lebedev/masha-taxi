import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngxs/store';

import { regExpressionToCheckEmail } from 'src/app/shared/constants';
import { SignIn } from '../ngxs/sign-in.actions';

@Component({
  selector: 'tx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  public isForgotPasswordFormVisible: boolean = false; //TODO: temporary
  public signInForm!: FormGroup;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initForm();
  }

  public onSignIn(): void {
    const { email, password } = this.signInForm.value;
    this.store.dispatch(new SignIn(email, password));
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
