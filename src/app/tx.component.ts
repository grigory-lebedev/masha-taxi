import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { carColors, roles } from './shared/constants';
import { NotificationListService } from './shared/general-components/notification/service/notification.service';
import { HideSpinner, ShowSpinner } from './shared/general-components/spinner/ngxs/spinner.actions';
import { ISelect } from './shared/models/select';

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

  public selectItems: ISelect[] = [];

  constructor(private notificationListService: NotificationListService, private store: Store) {}

  public demonstrationForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl({ value: '', disabled: false }, Validators.required),
    confirmPassword: new FormControl({ value: '', disabled: false }, Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    role: new FormControl(roles, Validators.required),
    isLoggedIn: new FormControl({ value: this.isChecked, disabled: false }),

    make: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    color: new FormControl(carColors, Validators.required),
  });


  public handleError() {

  }

  public onSignIn(): void {
    console.log(this.demonstrationForm.controls['isLoggedIn']);
    if (!this.demonstrationForm.valid) {
      return;
    }
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
