import {animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { INotification } from 'src/app/shared/models/notification';
import { NotificationListService } from './service/notification-list.service';

const showInOut = trigger('showInOut', [
  state('finishState', style({ opacity: 1 })),
  transition('void => *', [ style({ opacity: 0, right: '0px' }), animate('300ms')]), //from nothing to somewhere
  transition('* => void', [ animate('500ms'), style({ opacity: 0, left: '50%' })]) //into nothing
]);

@Component({
  selector: 'tx-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
  animations: [showInOut]
})
export class NotificationListComponent {
  public notificationList: INotification[] = [];
  constructor(private notificationListService: NotificationListService) {}

  ngAfterViewChecked() {
    this.notificationList = this.notificationListService.notificationList;
    console.log(this.notificationList.length);
  }

  public closeNotification(notificationId: string) {
    this.notificationListService.removeNotificationById(notificationId);
    this.notificationList = this.notificationListService.notificationList;
  }
}
