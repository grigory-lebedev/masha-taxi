import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { carColors, regExpressionToCheckEmail, roles } from 'src/app/shared/constants';
import { CarYearValidator } from 'src/app/shared/validators/car-year.validator';
import { PasswordMatchValidator } from 'src/app/shared/validators/password-match.validator';

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

  ngOnInit(): void {
    this.initForm();
    this.initCarForm();
  }

  public onSignUp(): void {
    console.log(this.signUpForm.controls);
  }

  public showCarForm(): boolean {
    const { role } = this.signUpForm.value;
    if (role==='Driver') {
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
