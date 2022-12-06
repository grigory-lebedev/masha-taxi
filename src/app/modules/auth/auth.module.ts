import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgxsModule } from '@ngxs/store';

import { SignInComponent } from './sign-in/components/sign-in.component';
import { ResetPasswordComponent } from './sign-in/components/reset-password/reset-password.component';
import { SignInState } from './sign-in/ngxs/sign-in.state';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FormControlsModule } from 'src/app/shared/form-controls/form-controls.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpState } from './sign-up/ngxs/sign-up.state';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    FormControlsModule,
    RouterModule,
    NgxsModule.forFeature([SignInState, SignUpState]),
  ],
  declarations: [SignInComponent, ResetPasswordComponent, SignUpComponent],
  exports: [],
})
export class AuthModule {}
