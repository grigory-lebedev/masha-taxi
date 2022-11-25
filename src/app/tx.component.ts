import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { carColors, roles } from './shared/constants';
import { NotificationListService } from './shared/general-components/notification/service/notification.service';
import { HideSpinner, ShowSpinner } from './shared/general-components/spinner/ngxs/spinner.actions';
import { ISelect } from './shared/models/select';
import { CarYearValidator } from './shared/validators/car-year.validator';
import { setErrorValidationMessage } from './shared/validators/error-messages';
import { PasswordMatchValidator } from './shared/validators/password-match.validator';

@Component({
  selector: 'tx-root',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.scss'],
  animations: []
})
export class AppComponent {
  public title = 'masha-taxi';
  public isChecked: boolean = false;
  public isSpinnerDisplayed: boolean = false;
  public itemsPerPagesList = ['10', '20', '50'];
  public selectRoles = roles;
  public selectColors = carColors;
  public regExpressionToCheckEmail: string = `^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$`;

  public selectItems: ISelect[] = [];

  constructor(private notificationListService: NotificationListService, private store: Store) {}

  public demonstrationForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.regExpressionToCheckEmail)]),
    password: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.maxLength(20), Validators.minLength(6)]),
    confirmPassword: new FormControl({ value: '', disabled: false }, [Validators.required]),
    firstName: new FormControl('',  [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
    role: new FormControl('', Validators.required),
    isLoggedIn: new FormControl({ value: this.isChecked, disabled: false }),

    make: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
    model: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
    year: new FormControl('', [Validators.required, CarYearValidator.getCarYearError()]),
    color: new FormControl('', Validators.required),
  }, PasswordMatchValidator.getPasswordMatchError);

  public onSignIn(): void {
    console.log(`Is form valid - ${this.demonstrationForm.valid}`);
    if (!this.demonstrationForm.valid) {
      return;
    }
  }

  //TODO: for open passwords
  public getErrorMessage(control: AbstractControl, placeholder: string): string {
    return setErrorValidationMessage(control, placeholder);
  }

  public onChangeEvent(event: any) {
    this.isChecked = !this.isChecked;
  }

  public showSuccessNotification() {
    this.notificationListService.showSuccess('Offer was accepted. Your trip is started');
  }

  public showWarnNotification() {
    this.notificationListService.showWarn('We sent the activation link to email address. Please activate your account.');
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
}
