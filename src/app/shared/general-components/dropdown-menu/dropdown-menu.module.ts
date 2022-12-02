import { NgModule } from "@angular/core";

import { MaterialModule } from "../../modules/material.module";
import { SharedModule } from "../../modules/shared.module";
import { DropdownMenuComponent } from "./dropdown-menu.component";

@NgModule({
  imports: [
    SharedModule,
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