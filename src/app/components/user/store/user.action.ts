import { createAction, props } from '@ngrx/store';
import {User} from '../../../interfaces/user';

export const GetUserAction = createAction('[User] - Get User');

export const CreateUserAction = createAction(
  '[User] - Create User',
  props<User>()
);

export const BeginGetUserAction = createAction('[User] - Begin Get User');

export const SuccessGetUserAction = createAction(
  '[User] - Success Get User',
  props<{ payload: User[] }>()
);

export const BeginCreateUserAction = createAction(
  '[User] - Begin Create User',
  props<{ payload: User }>()
);

export const SuccessCreateUserAction = createAction(
  '[User] - Success Create User',
  props<{ payload: User }>()
);

export const ErrorUserAction = createAction('[User] - Error', props<Error>());
