import { Component, Input } from '@angular/core';

@Component({
  selector: 'tx-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss'],
})
export class FormButtonComponent {
  @Input() text: string = '';
  @Input() disabled: boolean = true;
}
