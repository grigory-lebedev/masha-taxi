import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialModule } from "../../modules/material.module";
import { NotificationItemComponent } from "./notification-item/notification-item.component";
import { NotificationListComponent } from "./notification-list/notification-list.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
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
