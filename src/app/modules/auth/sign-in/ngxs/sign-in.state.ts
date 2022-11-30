import { Injectable } from '@angular/core';

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { map } from 'rxjs';

import { SignInService } from '../../auth.service';
import { IAuthData } from '../../auth.model';
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

  constructor(private signInService: SignInService) {}

  @Action(SignIn)
  public signIn({ patchState }: StateContext<IAuthData>, action: SignIn) {
    const { email, password } = action;
    return this.signInService.signIn(email, password).pipe(
      map((response) => {
        patchState({
          refreshToken: response.refreshToken,
          accessToken: response.accessToken,
          expirationTime: response.expirationTime,
        });
      })
    );
  }
}
