import { createSelector } from '@ngrx/store';
import AppState from './app.state';

export const selectAppState = (state: any) => state.app;
export const isLoading = createSelector(
  selectAppState,
  (appState: AppState) => appState
);
