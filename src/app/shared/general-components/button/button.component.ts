import { Component, Input } from '@angular/core';

@Component({
  selector: 'tx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() disabled: boolean = true;
  @Input() size: string = '';
  @Input() color: string = '';
}
