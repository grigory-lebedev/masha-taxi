import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgxsModule } from '@ngxs/store';

import { SignInComponent } from './sign-in/components/sign-in.component';
import { ResetPasswordComponent } from './sign-in/components/reset-password/reset-password.component';
import { SignInState } from './ngxs/sign-in.state';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FormControlsModule } from 'src/app/shared/form-controls/form-controls.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    FormControlsModule,
    RouterModule,
    NgxsModule.forFeature([SignInState]),
  ],
  declarations: [SignInComponent, ResetPasswordComponent, SignUpComponent],
  exports: [],
})
export class AuthModule {}
