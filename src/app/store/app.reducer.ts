import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.action';
import AppState , { initializeState } from './app.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(AppActions.StartLoadingAction, (state: AppState) => {
    state.IsLoading = true;
    return state;
  }),
  on(AppActions.EndLoadingAction, (state: AppState) => {
    state.IsLoading = false;
    return state;
  })
);

export function AppReducer(state: AppState | undefined, action: Action) {
  return reducer(state, action);
}
