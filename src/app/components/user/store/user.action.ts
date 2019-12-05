import { createAction, props } from '@ngrx/store';
import {User} from '../../../interfaces/user';

export const GetUserAction = createAction('[User] - Get User');

export const SuccessGetUserAction = createAction(
  '[User] - Success Get User',
  props<{ payload: User[] }>()
);

export const UpdateUserAction = createAction('[User] - Update User',
  props<{ payload: any }>()
);

export const SuccessUpdateUserAction = createAction('[User] - Success Update User');

export const ErrorUserAction = createAction('[User] - Error', props<Error>());
