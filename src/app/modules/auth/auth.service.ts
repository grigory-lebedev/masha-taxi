import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { delay, Observable, of } from 'rxjs';

import { ENDPOINTS } from 'src/app/shared/endpoints';
import { ICar } from 'src/app/shared/models/car.model';
import { ISignInData } from './models/sign-in-data.model';
import { ISignUpData } from './models/sign-up-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public signIn(email: string, password: string): Observable<ISignInData> {
    return this.http.post<ISignInData>(ENDPOINTS.login, { email, password });
  }

  public signUp(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    role: string,
    car?: ICar
  ): Observable<any> {
    let requestBody: ISignUpData = { email, password, firstName, lastName, role };

    if (role === 'driver') {
      requestBody = { ...requestBody, car };
    }
    return this.http.post<ISignUpData>(ENDPOINTS.register, requestBody);
  }
}
