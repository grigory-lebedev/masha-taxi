import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';

import { regExpressionToCheckEmail } from 'src/app/shared/constants';
import { ResetPassword } from '../../../ngxs/auth.actions';

@Component({
  selector: 'tx-reset-password-form',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  @Output() closed = new EventEmitter<void>();

  public resetPasswordForm!: FormGroup;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initForm();
  }

  public sendLinkToEmail(): void {
    const { email } = this.resetPasswordForm.value;
    this.store.dispatch(new ResetPassword(email))
    .subscribe(() => {
      this.closed.emit();
    })
  }

  private initForm(): void {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(regExpressionToCheckEmail),
      ]),
    });
  }
}
