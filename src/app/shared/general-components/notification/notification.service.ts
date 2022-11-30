import { Injectable } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

import { INotification } from 'src/app/shared/notification.model';
import { ENotification } from 'src/app/shared/enums/notification-type';

@Injectable({
  providedIn: 'root',
})
export class NotificationListService {
  public notificationList: INotification[] = [];

  public showSuccess(incomingMessage: string) {
    this.addNotification(incomingMessage, ENotification.success);
  }

  public showWarn(incomingMessage: string) {
    this.addNotification(incomingMessage, ENotification.warn);
  }

  public showError(incomingMessage: string) {
    this.addNotification(incomingMessage, ENotification.error);
  }

  private addNotification(incomingMessage: string, incomingType: string) {
    let newNotification = {
      id: uuidv4(),
      message: incomingMessage,
      type: incomingType,
    };
    if (this.notificationList.length < 4) {
      this.notificationList.push(newNotification);
    } else {
      this.notificationList.shift();
      this.notificationList.push(newNotification);
    }
  }

  public removeNotificationById(notificationId: string) {
    const notificationToBeRemoved = this.notificationList.findIndex(
      (obj) => obj.id === notificationId
    );
    this.notificationList.splice(notificationToBeRemoved, 1);
  }
}
