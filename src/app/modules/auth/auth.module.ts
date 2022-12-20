import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgxsModule } from '@ngxs/store';

import { SignInComponent } from './sign-in/components/sign-in.component';
import { ResetPasswordComponent } from './sign-in/components/reset-password/reset-password.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FormControlsModule } from 'src/app/shared/form-controls/form-controls.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { SignUpComponent } from './sign-up/components/sign-up.component';
import { AuthState } from './ngxs/auth.state';
import { CarFormComponent } from './sign-up/components/car-form/car-form.component';
import { GeneralFormComponent } from './sign-up/components/general-form/general-form.component';
import { DirectivesModule } from 'src/app/shared/modules/directives.module';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    FormControlsModule,
    RouterModule,
    DirectivesModule,
    NgxsModule.forFeature([AuthState]),
  ],
  declarations: [
    SignInComponent,
    ResetPasswordComponent,
    SignUpComponent,
    CarFormComponent,
    GeneralFormComponent
  ],
  exports: [],
})
export class AuthModule {}
