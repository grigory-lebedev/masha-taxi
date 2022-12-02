import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ENDPOINTS } from 'src/app/shared/endpoints';
import { IAuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(private http: HttpClient) {}

  public signIn(email: string, password: string): Observable<IAuthData> {
    return this.http.post<IAuthData>(ENDPOINTS.login, { email, password });
  }
}
