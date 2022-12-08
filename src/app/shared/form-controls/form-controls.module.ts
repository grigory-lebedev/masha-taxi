import { NgModule } from "@angular/core";

import { MaterialModule } from "../modules/material.module";
import { SharedModule } from "../modules/shared.module";
import { FormButtonComponent } from "./form-button/form-button.component";
import { FormInputComponent } from "./form-input/form-input.component";
import { FormSelectComponent } from "./form-select/form-select.component";

@NgModule({
  imports: [
    SharedModule,
    MaterialModule
  ],
  declarations: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent
  ],
  exports: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent
  ]
})
export class FormControlsModule {}


