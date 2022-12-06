import { Injectable, NgZone } from '@angular/core';

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs';

import { NotificationListService } from 'src/app/shared/general-components/notification/notification.service';
import { HideSpinner, ShowSpinner } from 'src/app/shared/general-components/spinner/ngxs/spinner.actions';
import { ISignInData } from '../models/sign-in-data.model';
import { AuthService } from '../auth.service';
import { SignIn, SignUp } from './auth.actions';
import { Router } from '@angular/router';

const signInStatusStateDefaults: ISignInData = {
  refreshToken: null,
  accessToken: null,
  expirationTime: null,
};

@State<ISignInData>({
  name: 'authStatus',
  defaults: signInStatusStateDefaults,
})
@Injectable()
export class AuthState {
  @Selector()
  static getRefreshToken(state: ISignInData) {
    return state.refreshToken;
  }

  @Selector()
  static getAccessToken(state: ISignInData) {
    return state.accessToken;
  }

  @Selector()
  static getExpirationTime(state: ISignInData) {
    return state.expirationTime;
  }

  constructor(
    private AuthService: AuthService,
    private notificationService: NotificationListService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  @Action(SignIn)
  public signIn(
    { patchState, dispatch }: StateContext<ISignInData>,
    { email, password }: SignIn
  ) {
    dispatch(new ShowSpinner());

    return this.AuthService.signIn(email, password).pipe(
      tap({
        next: (authData: ISignInData) => {
          patchState({
            ...authData,
          });
        },
        error: ({ error: { message } }) => {
          this.notificationService.showError(message);
        },
        finalize: () => dispatch(new HideSpinner()),
      })
    );
  }

  @Action(SignUp)
  public signUp(
    { dispatch }: StateContext<ISignInData>,
    { email, password, firstName, lastName, role, car }: SignUp
  ) {
    dispatch(new ShowSpinner());

    return this.AuthService.signUp(email, password, firstName, lastName, role, car).pipe(
      tap({
        next: () => {
          this.ngZone.run(() => this.router.navigate(['/sign-in']));
          this.notificationService.showSuccess('We sent the activation link to email address. Please activate your account.');
        },
        error: ({ error: { message } }) => {
          this.notificationService.showError(message);
        },
        finalize: () => dispatch(new HideSpinner()),
      })
    );
  }
}
