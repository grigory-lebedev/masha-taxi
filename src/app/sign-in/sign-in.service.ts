import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { IAuthData } from 'src/app/sign-in/authData.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  private SIGN_IN_URL = environment.endpoints.signIn;

  constructor(private http: HttpClient){}

  public signIn(email: string, password: string): Observable<IAuthData> {
    return this.http.post<IAuthData>(this.SIGN_IN_URL, {email, password});
  }
}
