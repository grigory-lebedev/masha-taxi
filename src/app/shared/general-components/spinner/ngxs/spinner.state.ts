import { State, Action, StateContext } from '@ngxs/store';
import { ShowSpinner, HideSpinner } from '../ngxs/spinner.actions';

@State<boolean>({ 
  name: 'spinner', 
  defaults: false
})
export class SpinnerState {
  @Action(ShowSpinner)
  showSpinner({patchState}: StateContext<boolean>) {
    patchState(true);
  } 

  @Action(HideSpinner)
  hideSpinner({patchState}: StateContext<boolean>) {
    patchState(false);
  } 
}