import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './sign-in/component/reset-password/reset-password.component';
import { SignInComponent } from './sign-in/component/sign-in.component';
import { SignUpComponent } from './sign-up/component/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    children: [
      { path: 'reset-password-form', component: ResetPasswordComponent },
    ],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    children: [
      { path: './reset-password-form', component: ResetPasswordComponent },
    ],
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TxRoutingModule {}
