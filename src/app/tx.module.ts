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
import { RoleSelectComponent } from './sign-up/component/role-select/role-select.component';
import { PageWrapperComponent } from './shared/general-components/page-wrapper/page-wrapper.component';
import { DropdownMenuComponent } from './shared/general-components/dropdown-menu/dropdown-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { ButtonComponent } from './shared/general-components/button/button.component';
import { NotificationListComponent } from './shared/general-components/notification/notification-list/notification-list.component';
import { NotificationItemComponent } from './shared/general-components/notification/notification-item/notification-item.component';
import { BasePopUpComponent } from './shared/general-components/base-popup/base-popup.component';
import { OpenPopupDirective } from './shared/general-components/base-popup/open-popup.directive';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    RoleSelectComponent,
    FormButtonComponent,
    PageWrapperComponent,
    DropdownMenuComponent,
    ButtonComponent,
    NotificationListComponent,
    NotificationItemComponent,
    BasePopUpComponent,
    OpenPopupDirective
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
    MatDialogModule
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
