import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

import { regExpressionToCheckEmail, roles } from 'src/app/shared/constants';
import { ERole } from 'src/app/shared/enums/role';
import { PasswordMatchValidator } from 'src/app/shared/validators/password-match.validator';

@Component({
  selector: 'tx-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss'],
})
export class GeneralFormComponent implements OnInit, OnDestroy {
  @Output() isCarFormVisible = new EventEmitter<boolean>();

  public parentForm!: FormGroup;
  public generalForm!: FormGroup;
  public selectRoles = roles;
  public roleChangesSubscription$!: Subscription;

  constructor(private parent: FormGroupDirective) {}

  ngOnInit(): void {
    this.parentForm = this.parent.form;
    this.initGeneralForm();
    this.subscribeToRoleChanges();
    this.parentForm.addControl('generalInfo', this.generalForm);
  }

  private initGeneralForm(): void {
    this.generalForm = new FormGroup(
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

  private subscribeToRoleChanges(): void {
    this.roleChangesSubscription$ = this.generalForm.controls['role'].valueChanges.subscribe((selectedRole) => {
      selectedRole === ERole.driver
        ? this.isCarFormVisible.emit(true)
        : this.isCarFormVisible.emit(false);
    });
  }

  ngOnDestroy(): void {
    this.roleChangesSubscription$.unsubscribe();
  }
}
