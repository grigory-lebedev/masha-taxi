import { Component } from '@angular/core';

import { Select } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { SignInState } from 'src/app/modules/auth/sign-in/ngxs/sign-in.state';
import { SignUpState } from 'src/app/modules/auth/sign-up/ngxs/sign-up.state';

import { languages } from '../../constants';

@Component({
  selector: 'tx-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
})
export class PageWrapperComponent {
  @Select(SignInState.getAccessToken) accessToken$!: Observable<string>;
  @Select(SignUpState.isSignUp) isUserSignedUp$!: Observable<boolean>;
  public languageList = languages;
}
