import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { SignInComponent } from './sign-in/components/sign-in.component';
import { ResetPasswordComponent } from './sign-in/components/reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/component/sign-up.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { SignInState } from './sign-in/ngxs/sign-in.state';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FormControlsModule } from 'src/app/shared/form-controls/form-controls.module';

@NgModule({
  imports: [
    MaterialModule,
    FormControlsModule,
    SharedModule,
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