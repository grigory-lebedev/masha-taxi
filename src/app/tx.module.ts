import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './tx.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormInputComponent } from './shared/form-controls/form-input/form-input.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { FormButtonComponent } from './shared/form-controls/form-button/form-button.component';
import { PageWrapperComponent } from './shared/general-components/page-wrapper/page-wrapper.component';
import { DropdownMenuComponent } from './shared/general-components/dropdown-menu/dropdown-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { ButtonComponent } from './shared/general-components/button/button.component';
import { NotificationListComponent } from './shared/general-components/notification/notification-list/notification-list.component';
import { NotificationItemComponent } from './shared/general-components/notification/notification-item/notification-item.component';
import { BasePopUpComponent } from './shared/general-components/base-popup/base-popup.component';
import { ConfirmationPopUpComponent } from './shared/general-components/confirmation-popup/confirmation-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OpenConfirmationPopupDirective } from './shared/general-components/confirmation-popup/open-confirmation-popup.directive';
import { SpinnerComponent } from './shared/general-components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { SpinnerState } from './shared/general-components/spinner/ngxs/spinner.state';
import { FormSelectComponent } from './shared/form-controls/form-select/form-select.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    PageWrapperComponent,
    DropdownMenuComponent,
    ButtonComponent,
    NotificationListComponent,
    NotificationItemComponent,
    BasePopUpComponent,
    ConfirmationPopUpComponent,
    OpenConfirmationPopupDirective,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    NgxsModule.forRoot([SpinnerState], { developmentMode: true }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
