import { Directive, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationPopUpComponent } from './confirmation-popup.component';

@Directive({
  selector: '[openConfirmationPopup]',
})
export class OpenConfirmationPopupDirective {
  @HostListener('click')
  openDialog(): void {
    this.dialog.open(ConfirmationPopUpComponent);
  }

  constructor(public dialog: MatDialog) {}
}