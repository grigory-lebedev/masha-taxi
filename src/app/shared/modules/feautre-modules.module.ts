import { NgModule } from "@angular/core";
import { AuthModule } from "src/app/modules/auth/auth.module";

@NgModule({
  exports: [
    AuthModule
  ]
})
export class FeatureModulesModule {}
