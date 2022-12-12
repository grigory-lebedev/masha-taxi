export class ShowSuccessNotification {
  static readonly type = '[Notification] Show Success Notification';
  constructor(public message: string) {}
}

export class ShowWarnNotification {
  static readonly type = '[Notification] Show Warn Notification';
  constructor(public message: string) {}
}

export class ShowErrorNotification {
  static readonly type = '[Notification] Show Error Notification';
  constructor(public message: string) {}
}
