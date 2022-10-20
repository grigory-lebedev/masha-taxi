import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { ConfirmationPopUpComponent } from './confirmation-popup.component';

@Directive({
  selector: '[openConfirmationPopup]',
})
export class OpenConfirmationPopupDirective {
  @Output() confirmed = new EventEmitter<void>();
  constructor(public dialog: MatDialog) {}

  @HostListener('click')
  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationPopUpComponent);
    dialogRef.afterClosed()
    .pipe(
      filter((confirmationResponse: boolean) => confirmationResponse)
    )
    .subscribe(() => {
      this.confirmed.emit();
    })
  }
}