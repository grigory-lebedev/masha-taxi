import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IAuthData } from 'src/app/sign-in/auth-data.model';
import { ENDPOINTS } from '../shared/endpoints';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(private http: HttpClient) {}

  public signIn(email: string, password: string): Observable<IAuthData> {
    return this.http.post<IAuthData>(ENDPOINTS.login, { email, password });
  }
}
