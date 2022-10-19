import { State, Action, StateContext } from '@ngxs/store';
import { ShowSpinner, HideSpinner } from '../actions/spinner.actions';

@State<boolean>({ 
  name: 'spinner', 
  defaults: false
})
export class SpinnerState {
  @Action(ShowSpinner)
  showSpinner(store: StateContext<boolean>) {
    store.setState(true);
  } 

  @Action(HideSpinner)
  hideSpinner(store: StateContext<boolean>) {
    store.setState(false);
  } 
}