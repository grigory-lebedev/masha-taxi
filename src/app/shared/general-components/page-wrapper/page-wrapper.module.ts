import { NgModule } from "@angular/core";

import { MaterialModule } from "../../modules/material.module";
import { SharedModule } from "../../modules/shared.module";
import { DropdownMenuModule } from "../dropdown-menu/dropdown-menu.module";
import { PageWrapperComponent } from "./page-wrapper.component";

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    DropdownMenuModule
  ],
  declarations: [
    PageWrapperComponent
  ],
  exports: [
    PageWrapperComponent
  ]
})
export class PageWrapperModule {}