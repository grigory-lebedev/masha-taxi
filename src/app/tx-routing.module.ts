import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './modules/auth/sign-in/components/sign-in.component';
import { SignUpComponent } from './modules/auth/sign-up/components/sign-up.component';
import { ClientHomeComponent } from './modules/client/components/home/home.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'client-home', component: ClientHomeComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '**', redirectTo: '/sign-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TxRoutingModule {}
