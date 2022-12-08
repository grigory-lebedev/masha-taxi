import { Component } from '@angular/core';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/modules/auth/ngxs/auth.state';

import { languages } from '../../constants';

@Component({
  selector: 'tx-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
})
export class PageWrapperComponent {
  @Select(AuthState.getAccessToken) accessToken$!: Observable<string>;
  public languageList = languages;
}
