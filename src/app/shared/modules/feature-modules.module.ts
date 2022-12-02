import { NgModule } from "@angular/core";

import { AuthModule } from "src/app/modules/auth/auth.module";
import { BasePopUpModule } from "../general-components/base-popup/base-popup.module";
import { NotificationModule } from "../general-components/notification/notification.module";
import { PageWrapperModule } from "../general-components/page-wrapper/page-wrapper.module";
import { SpinnerModule } from "../general-components/spinner/spinner.module";

@NgModule({
  exports: [
    AuthModule,
    BasePopUpModule,
    PageWrapperModule,
    NotificationModule,
    SpinnerModule
  ]
})
export class FeatureModulesModule {}
