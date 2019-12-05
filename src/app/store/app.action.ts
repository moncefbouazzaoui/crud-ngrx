import { createAction, props } from '@ngrx/store';

export const StartLoadingAction = createAction(
  '[Loading] - Start Loading '
);

export const EndLoadingAction = createAction(
  '[Loading] - End Loading'
);
