import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { TaxiComponent } from './tx.component';
import { TxRoutingModule } from './tx-routing.module';
import { FeatureModulesModule } from './shared/modules/feature-modules.module';
import { PluginsModule } from './shared/modules/plugins.module';

@NgModule({
  declarations: [
    TaxiComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TxRoutingModule,
    FeatureModulesModule,
    PluginsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [TaxiComponent],
})
export class AppModule {}
