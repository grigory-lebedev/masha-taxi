import { Component, OnInit } from '@angular/core';

import { showInOut } from 'src/app/shared/animations';
import { INotification } from 'src/app/shared/general-components/notification/notification.model';
import { NotificationListService } from '../notification.service';

@Component({
  selector: 'tx-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
  animations: [showInOut],
})
export class NotificationListComponent implements OnInit {
  public notificationList: INotification[] = [];
  public animationState: string = 'finalState';
  constructor(private notificationService: NotificationListService) {}

  ngOnInit() {
    this.notificationList = this.notificationService.notificationList;
  }
}
