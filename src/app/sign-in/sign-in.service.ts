import { Injectable } from '@angular/core';

import { delay, Observable, of } from 'rxjs';
import { IAuthDataState } from 'src/app/sign-in/authDataState.model';

const mockServerLoginResponse = {
  refreshToken: 'mockRefreshToken',
  accessToken: 'mockAccessToken',
  expirationTime: 1,
};

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  public signIn(email: string, password: string): Observable<IAuthDataState> {
    return of(mockServerLoginResponse).pipe(delay(1000));
  }
}
