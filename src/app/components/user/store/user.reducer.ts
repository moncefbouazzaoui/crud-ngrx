import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.action';
import UserState , { initializeState } from './user.state';
import {User} from '../../../interfaces/user';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(UserActions.GetUserAction, (state: UserState) => {
    return state;
  }),
  on(UserActions.SuccessGetUserAction, (state: UserState, { payload }) => {
    return { ...state, Users: payload };
  }),
  on(UserActions.ErrorUserAction, (state: UserState, error: Error) => {
    return { ...state, UserError: error };
  })
);

export function UserReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
