import { NgModule } from "@angular/core";

import { MaterialModule } from "../../modules/material.module";
import { SharedModule } from "../../modules/shared.module";
import { ButtonComponent } from "./button.component";

@NgModule({
  imports: [
    SharedModule,
    MaterialModule
  ],
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule {}