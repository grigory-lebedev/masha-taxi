import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialModule } from "../../modules/material.module";

import { BasePopUpModule } from "../base-popup/base-popup.module";
import { ButtonModule } from "../button/button.module";
import { ConfirmationPopUpComponent } from "./confirmation-popup.component";
import { OpenConfirmationPopupDirective } from "./open-confirmation-popup.directive";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ButtonModule,
    BasePopUpModule
  ],
  declarations: [
    ConfirmationPopUpComponent,
    OpenConfirmationPopupDirective
  ],
  exports: [
    ConfirmationPopUpComponent,
    OpenConfirmationPopupDirective
  ]
})
export class ConfirmationPopUpModule {}