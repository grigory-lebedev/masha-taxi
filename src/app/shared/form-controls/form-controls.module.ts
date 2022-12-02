import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "../modules/material.module";
import { FormButtonComponent } from "./form-button/form-button.component";
import { FormInputComponent } from "./form-input/form-input.component";
import { FormSelectComponent } from "./form-select/form-select.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
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


