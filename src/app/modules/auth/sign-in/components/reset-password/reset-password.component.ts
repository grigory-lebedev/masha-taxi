import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { regExpressionToCheckEmail } from 'src/app/shared/constants';
import { NotificationListService } from 'src/app/shared/general-components/notification/notification.service';

@Component({
  selector: 'tx-reset-password-form',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  @Output() isForgotPasswordFormVisible = new EventEmitter<boolean>();

  public isEmailSent: boolean = false;
  public resetPasswordForm!: FormGroup;

  constructor(private notificationListService: NotificationListService) {}

  ngOnInit(): void {
    this.initForm();
  }

  public sendLinkToEmail(): void {
    this.makeFormInvisible();
    this.isEmailSent = true;
  }

  public makeFormInvisible(): void {
    this.isForgotPasswordFormVisible.emit(false);
  }

  private showSuccessNotification() {
    this.notificationListService.showSuccess(
      'We sent the link for reset password on your email address.'
    );
  }

  private initForm(): void {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(regExpressionToCheckEmail),
      ]),
    });
  }

  ngOnDestroy(): void {
    if (this.isEmailSent) {
      this.showSuccessNotification();
    }
  }
}
