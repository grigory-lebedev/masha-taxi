import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { NotificationListService } from './shared/general-components/notification/service/notification.service';
import { SpinnerState } from './store/states/spinner.state';
import { Observable } from 'rxjs';
import { HideSpinner, ShowSpinner } from './store/actions/spinner.actions';

@Component({
  selector: 'tx-root',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.scss'],
  animations: []
})
export class AppComponent {
  @Select(SpinnerState) isLoading!: Observable<boolean>;
  public title = 'masha-taxi';
  public isChecked: boolean = false;
  public isSpinnerDisplayed: boolean = false;
  public itemsPerPagesList = ['10', '20', '50'];

  constructor(private notificationListService: NotificationListService, private store: Store) {}

  public demonstrationForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(
      { value: '', disabled: false },
      Validators.required
    ),
    name: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    isLoggedIn: new FormControl({ value: this.isChecked, disabled: false }),
  });

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
}
