import { Component, OnInit } from '@angular/core';
import { showInOutAnimation } from 'src/app/shared/animations';
import { INotification } from 'src/app/shared/models/notification';
import { NotificationListService } from '../service/notification.service';

@Component({
  selector: 'tx-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
  animations: [showInOutAnimation],
})
export class NotificationListComponent implements OnInit {
  public notificationList: INotification[] = [];
  constructor(private notificationService: NotificationListService) {}

  ngOnInit() {
    this.notificationList = this.notificationService.notificationList;
    console.log(this.notificationList.length);
  }
}
