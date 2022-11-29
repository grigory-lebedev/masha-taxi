import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ISignInRequest } from 'src/app/shared/models/signInRequest';
import { ISignInResponse } from 'src/app/shared/models/signInResponse';

const mockServerLoginResponse = {
  refreshToken: 'mockRefreshToken',
  accessToken: 'mockAccessToken',
  expirationTime: 1,
};

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  public getToken({email, password}: ISignInRequest): Observable<ISignInResponse> {
    return of(mockServerLoginResponse).pipe(delay(1000));
  }
}
