import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.action';
import UserState , { initializeState } from './user.state';
import {User} from '../../../interfaces/user';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(UserActions.GetUserAction, state => state),
  on(UserActions.CreateUserAction, (state: UserState, user: User) => {
    return { ...state, User: [...state.Users, user], UserError: null };
  }),
  on(UserActions.SuccessGetUserAction, (state: UserState, { payload }) => {
    return { ...state, Users: payload };
  }),
  on(UserActions.SuccessCreateUserAction, (state: UserState, { payload }) => {
    return { ...state, Users: [...state.Users, payload], UserError: null };
  }),
  on(UserActions.ErrorUserAction, (state: UserState, error: Error) => {
    console.log(error);
    return { ...state, UserError: error };
  })
);

export function UserReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
