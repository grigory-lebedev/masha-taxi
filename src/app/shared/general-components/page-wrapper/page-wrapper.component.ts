import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SignInState } from 'src/app/sign-in/ngxs/states/sign-in.state';
import { languages } from '../../constants';

@Component({
  selector: 'tx-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
})
export class PageWrapperComponent {
  @Select(SignInState.getSignedIn) isSignedIn$!: Observable<boolean>;
  public isLoggedIn: boolean = false;
  public languageList = languages;
}
