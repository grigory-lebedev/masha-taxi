import { NgModule } from "@angular/core";

import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsModule } from "@ngxs/store";

@NgModule({
  imports: [
    NgxsModule.forRoot([], { developmentMode: true }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  exports: [
    NgxsModule,
    NgxsReduxDevtoolsPluginModule
  ]
})
export class PluginsModule {}
