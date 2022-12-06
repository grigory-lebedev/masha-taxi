import { Injectable } from '@angular/core';

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs';

import { NotificationListService } from 'src/app/shared/general-components/notification/notification.service';
import { HideSpinner, ShowSpinner} from 'src/app/shared/general-components/spinner/ngxs/spinner.actions';
import { AuthService } from '../../auth.service';
import { SignUp } from './sign-up.actions';

interface SignUpStateModel {
  isSignUp: boolean;
}

@State<SignUpStateModel>({
  name: 'signUpStatus',
  defaults: {
    isSignUp: false,
  },
})
@Injectable()
export class SignUpState {
  @Selector()
  static isSignUp(state: SignUpStateModel) {
    return state.isSignUp;
  }

  constructor(
    private AuthService: AuthService,
    private notificationService: NotificationListService
  ) {}

  @Action(SignUp)
  public signUp(
    { patchState, dispatch }: StateContext<SignUpStateModel>,
    { email, password, firstName, lastName, role, car }: SignUp
  ) {
    dispatch(new ShowSpinner());
    return this.AuthService.signUp(email, password, firstName, lastName, role, car).pipe(
      tap({
        next: () => {
          patchState({
            isSignUp: true,
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
