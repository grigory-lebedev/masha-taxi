import { Injectable } from '@angular/core';

import { State, Action, StateContext, Selector } from '@ngxs/store';

import { NotificationListService } from '../notification.service';
import { ShowErrorNotification, ShowSuccessNotification, ShowWarnNotification } from './notification.actions';
import { ENotification } from 'src/app/shared/enums/notification-type';

interface NotificationStateModel {
  message: string;
  type: string;
}

@State<NotificationStateModel>({
  name: 'notification',
  defaults: {
    message: '',
    type: '',
  },
})
@Injectable()
export class NotificationState {
  @Selector()
  static getNotificationMessage(state: NotificationStateModel) {
    return state.message;
  }

  @Selector()
  static getNotificationType(state: NotificationStateModel) {
    return state.type;
  }

  constructor(private notificationService: NotificationListService) {}

  @Action(ShowSuccessNotification)
  showSuccessNotification(
    { patchState }: StateContext<NotificationStateModel>,
    { message }: ShowSuccessNotification
  ) {
    patchState({
      message: message,
      type: ENotification.success
    });
    this.notificationService.showSuccess(message);
  }

  @Action(ShowWarnNotification)
  showWarnNotification(
    { patchState }: StateContext<NotificationStateModel>,
    { message }: ShowWarnNotification
  ) {
    patchState({
      message: message,
      type: ENotification.warn
    });
    this.notificationService.showWarn(message);
  }

  @Action(ShowErrorNotification)
  showErrorNotification(
    { patchState }: StateContext<NotificationStateModel>,
    { message }: ShowErrorNotification
  ) {
    patchState({
      message: message,
      type: ENotification.error
    });
    this.notificationService.showError(message);
  }
}
