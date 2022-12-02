import { Injectable } from '@angular/core';

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs';

import { NotificationListService } from 'src/app/shared/general-components/notification/notification.service';
import { HideSpinner, ShowSpinner } from 'src/app/shared/general-components/spinner/ngxs/spinner.actions';
import { IAuthData } from '../auth-data.model';
import { SignInService } from '../auth.service';
import { SignIn } from './sign-in.actions';

const signInStatusStateDefaults: IAuthData = {
  refreshToken: null,
  accessToken: null,
  expirationTime: null,
};

@State<IAuthData>({
  name: 'signInStatus',
  defaults: signInStatusStateDefaults,
})
@Injectable()
export class SignInState {
  @Selector()
  static getRefreshToken(state: IAuthData) {
    return state.refreshToken;
  }

  @Selector()
  static getAccessToken(state: IAuthData) {
    return state.accessToken;
  }

  static getExpirationTime(state: IAuthData) {
    return state.expirationTime;
  }

  constructor(
    private signInService: SignInService,
    private notificationService: NotificationListService
  ) {}

  @Action(SignIn)
  public signIn(
    { patchState, dispatch }: StateContext<IAuthData>,
    { email, password }: SignIn
  ) {
    dispatch(new ShowSpinner());
    return this.signInService.signIn(email, password).pipe(
      tap({
        next: (authData: IAuthData) => {
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
}
