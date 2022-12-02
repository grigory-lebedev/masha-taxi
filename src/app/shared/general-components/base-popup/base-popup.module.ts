import { NgModule } from "@angular/core";

import { MaterialModule } from "../../modules/material.module";
import { SharedModule } from "../../modules/shared.module";
import { BasePopUpComponent } from "./base-popup.component";

@NgModule({
  imports: [
    SharedModule,
    MaterialModule
  ],
  declarations: [
    BasePopUpComponent
  ],
  exports: [
    BasePopUpComponent
  ]
})
export class BasePopUpModule {}