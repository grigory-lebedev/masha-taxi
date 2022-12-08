import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Store } from '@ngxs/store';

import { SignUp } from '../../ngxs/auth.actions';

@Component({
  selector: 'tx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  public signUpForm: FormGroup = new FormGroup({});
  public isCarFormVisible: boolean = false;

  constructor(private store: Store) {}

  public setCarFormVisibility(value: boolean) {
    this.isCarFormVisible = value;
  }

  public onSignUp(): void {
    const { email, password, firstName, lastName, role } =
      this.signUpForm.value['generalInfo'];
    this.store.dispatch(
      new SignUp(
        email,
        password,
        firstName,
        lastName,
        role,
        this.signUpForm.value['carInfo']
      )
    );
  }
}
