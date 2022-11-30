import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

import { ShowSpinner, HideSpinner } from '../ngxs/spinner.actions';

@State<boolean>({ 
  name: 'spinner', 
  defaults: false
})
@Injectable()
export class SpinnerState {
  @Action(ShowSpinner)
  showSpinner({setState}: StateContext<boolean>) {
    setState(true);
  } 

  @Action(HideSpinner)
  hideSpinner({setState}: StateContext<boolean>) {
    setState(false);
  } 
}