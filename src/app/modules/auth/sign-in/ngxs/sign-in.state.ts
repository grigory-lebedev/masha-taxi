import { Injectable } from '@angular/core';

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs';

import { NotificationListService } from 'src/app/shared/general-components/notification/notification.service';
import {
  HideSpinner,
  ShowSpinner,
} from 'src/app/shared/general-components/spinner/ngxs/spinner.actions';
import { ISignInData } from '../../models/sign-in-data.model';
import { AuthService } from '../../auth.service';
import { SignIn } from './sign-in.actions';

const signInStatusStateDefaults: ISignInData = {
  refreshToken: null,
  accessToken: null,
  expirationTime: null,
};

@State<ISignInData>({
  name: 'signInStatus',
  defaults: signInStatusStateDefaults,
})
@Injectable()
export class SignInState {
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
    private notificationService: NotificationListService
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
}
