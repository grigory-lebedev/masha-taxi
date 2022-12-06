import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngxs/store';

import { carColors, regExpressionToCheckEmail, roles } from 'src/app/shared/constants';
import { ERole } from 'src/app/shared/enums/role';
import { CarYearValidator } from 'src/app/shared/validators/car-year.validator';
import { PasswordMatchValidator } from 'src/app/shared/validators/password-match.validator';
import { SignUp } from '../ngxs/auth.actions';

@Component({
  selector: 'tx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  public signUpForm!: FormGroup;
  public carForm!: FormGroup;
  public selectRoles = roles;
  public selectColors = carColors;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initForm();
    this.initCarForm();
  }

  public onSignUp(): void {
    const { email, password, firstName, lastName, role, car } = this.signUpForm.value;
    this.store.dispatch(new SignUp(email, password, firstName, lastName, role, car));
  }

  public showCarForm(): boolean {
    const { role } = this.signUpForm.value;

    if (role === ERole.driver) {
      this.signUpForm.addControl('car', this.carForm);
      return true;
    }
    else {
      return false;
    }
  }

  private initForm(): void {
    this.signUpForm = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(regExpressionToCheckEmail),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
        firstName: new FormControl('', [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ]),
        role: new FormControl('', Validators.required),
      },
      PasswordMatchValidator.getPasswordMatchError
    );
  }

  private initCarForm(): void {
    this.carForm = new FormGroup(
      {
        make: new FormControl('', [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ]),
        model: new FormControl('', [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ]),
        year: new FormControl('', [
          Validators.required,
          CarYearValidator.getCarYearError(),
        ]),
        color: new FormControl('', Validators.required),
      },
    );
  }
}
