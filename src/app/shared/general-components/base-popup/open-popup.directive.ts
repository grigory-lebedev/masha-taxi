import { Directive, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasePopUpComponent } from './base-popup.component';

@Directive({
  selector: '[openTempPopup]',
})
export class OpenPopupDirective {
  @HostListener('click')
  openDialog(): void {
    this.dialog.open(BasePopUpComponent);
  }

  constructor(public dialog: MatDialog) {}
}
