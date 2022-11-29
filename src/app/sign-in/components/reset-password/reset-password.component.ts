import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { regExpressionToCheckEmail } from 'src/app/shared/constants';
import { NotificationListService } from 'src/app/shared/general-components/notification/service/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tx-reset-password-form',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnDestroy{
  public isEmailSent: boolean = false;
  public resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(regExpressionToCheckEmail),
    ]),
  });

  constructor(private notificationListService: NotificationListService, private router: Router) {}

  public sendLinkToEmail(): void {
    if (this.resetPasswordForm.valid) {
      this.isEmailSent = true;
    }
    this.router.navigate(['/']);
  }

  private showSuccessNotification() {
    this.notificationListService.showSuccess(
      'We sent the link for reset password on your email address.'
    );
  }

  ngOnDestroy(): void {
    if(this.isEmailSent) {
      this.showSuccessNotification();
    }
  }
}
