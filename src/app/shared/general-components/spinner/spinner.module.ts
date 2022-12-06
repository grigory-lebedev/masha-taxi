import { NgModule } from "@angular/core";

import { NgxsModule } from '@ngxs/store';

import { MaterialModule } from "../../modules/material.module";
import { SharedModule } from "../../modules/shared.module";
import { SpinnerState } from "./ngxs/spinner.state";
import { SpinnerComponent } from "./spinner.component";

@NgModule({
  imports: [
    SharedModule,
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