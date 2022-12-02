import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NgxsModule } from '@ngxs/store';

import { MaterialModule } from "../../modules/material.module";
import { SpinnerState } from "./ngxs/spinner.state";
import { SpinnerComponent } from "./spinner.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxsModule.forFeature([SpinnerState]),
  ],
  declarations: [
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SpinnerModule {}