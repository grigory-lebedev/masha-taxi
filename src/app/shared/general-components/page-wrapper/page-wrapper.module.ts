import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialModule } from "../../modules/material.module";
import { DropdownMenuModule } from "../dropdown-menu/dropdown-menu.module";
import { PageWrapperComponent } from "./page-wrapper.component";

@NgModule({
  imports: [
    CommonModule,
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