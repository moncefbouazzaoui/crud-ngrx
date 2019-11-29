import {User} from '../../../interfaces/user';

export default class UserState {
  Users: Array<User>;
}

export const initializeState = () => {
  return { Users: Array<User>() };
};
