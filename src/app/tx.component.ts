import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngxs/store';

import { carColors, regExpressionToCheckEmail, roles } from './shared/constants';
import { NotificationListService } from './shared/general-components/notification/notification.service';
import { HideSpinner, ShowSpinner } from './shared/general-components/spinner/ngxs/spinner.actions';
import { CarYearValidator } from './shared/validators/car-year.validator';
import { PasswordMatchValidator } from './shared/validators/password-match.validator';

@Component({
  selector: 'tx-root',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'masha-taxi';
  public isSpinnerDisplayed: boolean = false;
  public itemsPerPagesList = ['10', '20', '50'];
  public selectRoles = roles;
  public selectColors = carColors;
  public demonstrationForm!: FormGroup;

  constructor(
    private notificationListService: NotificationListService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  public onSignIn(): void {
    console.log(`Is form valid - ${this.demonstrationForm.valid}`);
    if (!this.demonstrationForm.valid) {
      return;
    }
  }

  public showSuccessNotification() {
    this.notificationListService.showSuccess(
      'Offer was accepted. Your trip is started'
    );
  }

  public showWarnNotification() {
    this.notificationListService.showWarn(
      'We sent the activation link to email address. Please activate your account.'
    );
  }

  public showErrorNotification() {
    this.notificationListService.showError('Your password is wrong.');
  }
  
  public toggleSpinnerMode() {
    if (this.isSpinnerDisplayed) {
      this.store.dispatch(new HideSpinner());
    } else {
      this.store.dispatch(new ShowSpinner());
    }
    this.isSpinnerDisplayed = !this.isSpinnerDisplayed;
  }

  public showOrderConfirmed() {
    console.log('Order was confirmed');
  }

  private initForm(): void {
    this.demonstrationForm = new FormGroup(
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
        confirmPassword: new FormControl('', [
          Validators.required,
        ]),
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
        isLoggedIn: new FormControl(false),
  
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
      PasswordMatchValidator.getPasswordMatchError
    );
  }
}
