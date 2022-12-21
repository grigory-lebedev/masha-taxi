import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FormControlsModule } from 'src/app/shared/form-controls/form-controls.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { ClientHomeComponent } from './components/home/home.component';
import { ButtonModule } from 'src/app/shared/general-components/button/button.module';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    FormControlsModule,
    RouterModule,
    ButtonModule,
    //NgxsModule.forFeature([ClientState]),
  ],
  declarations: [
    ClientHomeComponent
  ],
  exports: [],
})
export class ClientModule {}