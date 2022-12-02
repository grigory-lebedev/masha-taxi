import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { INotification } from 'src/app/shared/general-components/notification/notification.model';
import { NotificationListService } from '../notification.service';

@Component({
  selector: 'tx-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnInit, OnDestroy {
  @Input() notification: INotification = { id: '', message: '', type: '' };

  public notificationList: INotification[] = [];
  public timeoutID: any;
  constructor(private notificationListService: NotificationListService) {}

  ngOnInit() {
    this.timeoutID = setTimeout(() => {
      this.notificationListService.removeNotificationById(this.notification.id);
    }, 8000);
  }

  public closeNotification(notificationId: string) {
    this.notificationListService.removeNotificationById(notificationId);
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutID);
  }
}
