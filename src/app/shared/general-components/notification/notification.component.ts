import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { NotificationService } from './service/notification.service';
import { INotification } from '../../models/notification';

@Component({
  selector: 'tx-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: []
})

export class NotificationComponent implements OnInit, OnDestroy {
  public notification: INotification = { isShowUp: false, message: "", type: "" }
  public notificationSubscription!: Subscription;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationSubscription = this.notificationService.notificationState
    .subscribe(
      (state) => {
        this.notification.type = state.type;
        this.notification.message = state.message;
        this.notification.isShowUp = state.isShowUp;
        setTimeout(() => {
          this.notification.isShowUp = false;
        }, 8000);
      });
  }

  public closeNotification(){
    this.notification.isShowUp = false;
  }

  ngOnDestroy() {
    this.notificationSubscription.unsubscribe();
  }
}
