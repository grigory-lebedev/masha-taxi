import { NgModule } from "@angular/core";

import { AuthModule } from "src/app/modules/auth/auth.module";
import { BasePopUpModule } from "../general-components/base-popup/base-popup.module";
import { ButtonModule } from "../general-components/button/button.module";
import { ConfirmationPopUpModule } from "../general-components/confirmation-popup/confirmation-popup.module";
import { DropdownMenuModule } from "../general-components/dropdown-menu/dropdown-menu.module";
import { NotificationModule } from "../general-components/notification/notification.module";
import { PageWrapperModule } from "../general-components/page-wrapper/page-wrapper.module";
import { SpinnerModule } from "../general-components/spinner/spinner.module";

@NgModule({
  exports: [
    AuthModule,
    BasePopUpModule,
    ButtonModule,
    PageWrapperModule,
    NotificationModule,
    DropdownMenuModule,
    ConfirmationPopUpModule,
    SpinnerModule
  ]
})
export class FeatureModulesModule {}
