import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ENotification } from './shared/enums/notification-type';
import { NotificationListService } from './shared/general-components/notification-list/service/notification-list.service';

@Component({
  selector: 'tx-root',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.scss'],
})
export class AppComponent {
  constructor(private notificationListService: NotificationListService) {}

  public title = 'masha-taxi';

  public isChecked: boolean = false;

  public itemsPerPagesList = ['10', '20', '50'];

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
    this.notificationListService.showNotification(
      'Offer was accepted. Your trip is started',
      ENotification.success
    );
  }

  public showWarnNotification() {
    this.notificationListService.showNotification(
      'We sent the activation link to email address. Please activate your account.',
      ENotification.warn
    );
  }

  public showErrorNotification() {
    this.notificationListService.showNotification(
      'Your password is wrong.',
      ENotification.error
    );
  }
}
