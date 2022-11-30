import { Injectable } from '@angular/core';

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { map } from 'rxjs';
import { IAuthDataState } from 'src/app/sign-in/authDataState.model';

import { SignInService } from '../sign-in.service';
import { SignIn } from './sign-in.actions';

const signInStatusStateDefaults: IAuthDataState = {
  refreshToken: null,
  accessToken: null,
  expirationTime: null,
};

@State<IAuthDataState>({
  name: 'signInStatus',
  defaults: signInStatusStateDefaults,
})
@Injectable()
export class SignInState {
  @Selector()
  static getRefreshToken(state: IAuthDataState) {
    return state.refreshToken;
  }

  @Selector()
  static getAccessToken(state: IAuthDataState) {
    return state.accessToken;
  }

  static getExpirationTime(state: IAuthDataState) {
    return state.expirationTime;
  }

  constructor(private signInService: SignInService) {}

  @Action(SignIn)
  public signIn({ patchState }: StateContext<IAuthDataState>, action: SignIn) {
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
