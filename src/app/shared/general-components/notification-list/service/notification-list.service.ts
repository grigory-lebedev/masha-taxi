import { Injectable } from '@angular/core';
import { INotification } from 'src/app/shared/models/notification';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class NotificationListService {
  public notificationList: INotification[] = [];

  public showNotification(incomingMessage: string, incomingType: string) {
    let newNotification = { id: uuidv4(), message: incomingMessage, type: incomingType }
    if (this.notificationList.length < 4) {
      this.notificationList.push(newNotification);
    }
    else {
      this.notificationList.shift();
      this.notificationList.push(newNotification);
    }
    setTimeout(() => {
      this.removeNotificationById(newNotification.id)
    }, 8000);
  }

  public removeNotificationById(notificationId: string){
    const notificationToBeRemoved = this.notificationList.findIndex((obj) => obj.id === notificationId);
    this.notificationList.splice(notificationToBeRemoved, 1);
    console.log(this.notificationList);
  }
}
