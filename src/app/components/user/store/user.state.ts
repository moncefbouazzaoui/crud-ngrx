import {User} from '../../../interfaces/user';

export default class UserState {
  Users: Array<User>;
  //IsLoading: boolean;
}

export const initializeState = () => {
  return { Users: Array<User>()/*, IsLoading: false */};
};
