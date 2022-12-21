import { Injectable } from '@angular/core';

import { delay, Observable, of } from 'rxjs';
import { IUserData } from 'src/app/shared/models/user.model';

const mockUser = {
  firstName: 'Maria',
  lastName: 'Shkrabo',
  email: 'shkraba.maryia@gmail.com',
  role: 'client',
  id: '',
  currentOrder: '',
};

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  public getUser(): Observable<IUserData> {
    return of(mockUser).pipe(delay(1000));
  }
}
