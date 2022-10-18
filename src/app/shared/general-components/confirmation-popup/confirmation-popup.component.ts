import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tx-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss'],
})
export class ConfirmationPopUpComponent {
  @Input() text: string = '';
  @Output() isPopupActive = new EventEmitter<boolean>();

  public closePopUp() {
    this.isPopupActive.emit(false);
  }
}
