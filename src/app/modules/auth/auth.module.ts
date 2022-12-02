import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';

import { SignInComponent } from './sign-in/components/sign-in.component';
import { ResetPasswordComponent } from './sign-in/components/reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/component/sign-up.component';
import { SignInState } from './sign-in/ngxs/sign-in.state';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FormControlsModule } from 'src/app/shared/form-controls/form-controls.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormControlsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxsModule.forFeature([SignInState]),
  ],
  declarations: [
    SignInComponent,
    ResetPasswordComponent,
    SignUpComponent,
  ],
  exports: []
})
export class AuthModule { }