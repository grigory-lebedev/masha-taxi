import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';

import { ShowSpinner, HideSpinner } from '../ngxs/spinner.actions';

interface SpinnerStateModel {
  isVisible: boolean;
}

@State<SpinnerStateModel>({ 
  name: 'spinner', 
  defaults: {
    isVisible: false
  }
})
@Injectable()
export class SpinnerState {

  @Selector()
  static isVisible(state: SpinnerStateModel) {
    return state.isVisible;
  }

  @Action(ShowSpinner)
  showSpinner({patchState}: StateContext<SpinnerStateModel>) {
    patchState({
      isVisible: true
    });
  }

  @Action(HideSpinner)
  hideSpinner({patchState}: StateContext<SpinnerStateModel>) {
    patchState({
      isVisible: false
    });
  } 
}