import { NgModule } from "@angular/core";

import { NgxsModule } from '@ngxs/store';

import { MaterialModule } from "../../modules/material.module";
import { SharedModule } from "../../modules/shared.module";
import { NotificationState } from "./ngxs/notification.state";
import { NotificationItemComponent } from "./notification-item/notification-item.component";
import { NotificationListComponent } from "./notification-list/notification-list.component";

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    NgxsModule.forFeature([NotificationState]),
  ],
  declarations: [
    NotificationListComponent,
    NotificationItemComponent
  ],
  exports: [
    NotificationListComponent
  ]
})
export class NotificationModule {}
