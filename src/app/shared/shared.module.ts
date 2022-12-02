import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxsModule } from '@ngxs/store';

import { FormButtonComponent } from 'src/app/shared/form-controls/form-button/form-button.component';
import { FormInputComponent } from 'src/app/shared/form-controls/form-input/form-input.component';
import { PageWrapperComponent } from './general-components/page-wrapper/page-wrapper.component';
import { DropdownMenuComponent } from './general-components/dropdown-menu/dropdown-menu.component';
import { ButtonComponent } from './general-components/button/button.component';
import { BasePopUpComponent } from './general-components/base-popup/base-popup.component';
import { ConfirmationPopUpComponent } from './general-components/confirmation-popup/confirmation-popup.component';
import { OpenConfirmationPopupDirective } from './general-components/confirmation-popup/open-confirmation-popup.directive';
import { SpinnerComponent } from './general-components/spinner/spinner.component';
import { FormSelectComponent } from './form-controls/form-select/form-select.component';
import { SpinnerState } from './general-components/spinner/ngxs/spinner.state';

@NgModule({
  imports: [
    CommonModule,
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
    NgxsModule.forFeature([SpinnerState]),
  ],
  declarations: [
    FormInputComponent,
    FormButtonComponent,
    PageWrapperComponent,
    DropdownMenuComponent,
    ButtonComponent,
    BasePopUpComponent,
    ConfirmationPopUpComponent,
    OpenConfirmationPopupDirective,
    SpinnerComponent,
    FormSelectComponent,
  ],
  exports: [
    CommonModule,
    FormInputComponent,
    FormButtonComponent,
    PageWrapperComponent,
    DropdownMenuComponent,
    ButtonComponent,
    BasePopUpComponent,
    ConfirmationPopUpComponent,
    OpenConfirmationPopupDirective,
    SpinnerComponent,
    FormSelectComponent,
  ]
})
export class SharedModule { }