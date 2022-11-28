import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

const mockServerLoginResponse = {
  refreshToken: 'mockRefreshToken',
  accessToken: 'mockAccessToken',
  expirationTime: 1,
};

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  public getToken(email: string, password: string) {
    return of(mockServerLoginResponse).pipe(delay(1000));
  }
}
