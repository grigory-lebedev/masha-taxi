import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialModule } from "../../modules/material.module";
import { BasePopUpComponent } from "./base-popup.component";

@NgModule({
  imports: [
    CommonModule,
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