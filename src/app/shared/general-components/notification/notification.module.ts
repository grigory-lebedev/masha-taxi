import { NgModule } from "@angular/core";

import { MaterialModule } from "../../modules/material.module";
import { SharedModule } from "../../modules/shared.module";
import { NotificationItemComponent } from "./notification-item/notification-item.component";
import { NotificationListComponent } from "./notification-list/notification-list.component";

@NgModule({
  imports: [
    SharedModule,
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
