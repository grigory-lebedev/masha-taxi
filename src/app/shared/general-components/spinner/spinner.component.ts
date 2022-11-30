import { Component } from '@angular/core';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SpinnerState } from './ngxs/spinner.state';

@Component({
  selector: 'tx-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Select(SpinnerState) isLoading$!: Observable<boolean>;
}
