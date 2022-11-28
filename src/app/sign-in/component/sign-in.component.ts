import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { regExpressionToCheckEmail } from 'src/app/shared/constants';
import { PasswordMatchValidator } from 'src/app/shared/validators/password-match.validator';
import { SignInService } from '../service/sign-in.service';

@Component({
  selector: 'tx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnDestroy {
  public isChecked: boolean = false;
  public loginResponseSubscription$!: Subscription;
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

  constructor(private signInService: SignInService) {}

  public onSignIn(): void {
    if (this.signInForm.valid) {
      this.loginResponseSubscription$ = this.signInService
        .getToken(
          this.signInForm.controls['email'].value,
          this.signInForm.controls['password'].value
        )
        .subscribe({
          next(response) {
            console.log('Login Response from Server: ', response);
          },
          error(error) {
            console.log('Error Getting Data: ', error);
          },
        });
    }
  }

  public onChangeEvent(event: any) {
    this.isChecked = !this.isChecked;
  }

  ngOnDestroy(): void {
    this.loginResponseSubscription$.unsubscribe();
  }
}
