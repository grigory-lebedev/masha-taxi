import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialModule } from "../../modules/material.module";
import { DropdownMenuComponent } from "./dropdown-menu.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    DropdownMenuComponent
  ],
  exports: [
    DropdownMenuComponent
  ]
})
export class DropdownMenuModule {}