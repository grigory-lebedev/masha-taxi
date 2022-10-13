import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { INotification } from 'src/app/shared/models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new Subject<INotification>();
  public notificationState = this.notificationSubject.asObservable();

  public showNotification(message: string, type?: string) {
    this.notificationSubject.next({
      isShowUp: true,
      message,
      type
    });
  }
}