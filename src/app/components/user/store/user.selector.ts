import { createSelector } from '@ngrx/store';
import UserState from './user.state';

export const selectUserState = (state: any) => state.users;
export const getUsers = createSelector(
  selectUserState,
  (userState: UserState) => userState.Users
);

/*export const getLoader = createSelector(
  selectUserState,
  (userState: UserState) => userState.IsLoading
);
*/
