import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IAuthData } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  private SIGN_IN_URL = environment.endpoints.signIn;

  constructor(private http: HttpClient) {}

  public signIn(email: string, password: string): Observable<IAuthData> {
    return this.http.post<IAuthData>(this.SIGN_IN_URL, { email, password });
  }
}
