import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { map } from 'rxjs';
import { ISignInResponse } from 'src/app/shared/models/signInResponse';
import { SignInService } from '../../service/sign-in.service';
import { SignIn } from '../actions/sign-in.actions';

export interface ISignInStatusState {
  signedIn: boolean;
  signInResponse: ISignInResponse;
}

const signInStatusStateDefaults: ISignInStatusState = {
  signedIn: false,
  signInResponse: {
    refreshToken: null,
    accessToken: null,
    expirationTime: null,
  },
};

@State<ISignInStatusState>({
  name: 'signInStatus',
  defaults: signInStatusStateDefaults,
})
@Injectable()
export class SignInState {
  @Selector()
  static getSignedIn(state: ISignInStatusState) {
    return state.signedIn;
  }

  @Selector()
  static getSignInResponse(state: ISignInStatusState) {
    return state.signInResponse;
  }

  constructor(private signInService: SignInService) {}

  @Action(SignIn)
  public signIn({ patchState }: StateContext<ISignInStatusState>, action: SignIn) {
    return this.signInService.getToken(action.payload).pipe(
      map((response) => {
        patchState({
          signedIn: true,
          signInResponse: response,
        });
      })
    );
  }
}
