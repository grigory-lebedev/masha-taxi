import { Component } from '@angular/core';

import { Select } from '@ngxs/store';
import { Observable, of } from 'rxjs';

import { SignInState } from 'src/app/sign-in/ngxs/sign-in.state';
import { languages } from '../../constants';

@Component({
  selector: 'tx-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
})
export class PageWrapperComponent {
  @Select(SignInState.getAccessToken) accessToken$!: Observable<string>;
  public isLoggedIn: boolean = false;
  public languageList = languages;
}
