import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { regExpressionToCheckEmail } from 'src/app/shared/constants';
import { ISignInResponse } from 'src/app/shared/models/signInResponse';
import { PasswordMatchValidator } from 'src/app/shared/validators/password-match.validator';
import { SignIn } from '../ngxs/actions/sign-in.actions';
import { SignInState } from '../ngxs/states/sign-in.state';

@Component({
  selector: 'tx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  public isChecked: boolean = false;
  @Select(SignInState.getSignInResponse) isSignedIn$!: Observable<ISignInResponse>;
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

  constructor(private store: Store) {}

  public onSignIn(): void {
    let email = this.signInForm.controls['email'].value;
    let password = this.signInForm.controls['password'].value;
    this.store.dispatch(new SignIn({ email, password }));
    this.isSignedIn$.subscribe({
      next: (res) => console.log(res),
    });
  }

  public onChangeEvent(event: any) {
    this.isChecked = !this.isChecked;
  }
}
