import { Map } from 'immutable';
import { SIGN_IN_SUCCEEDED } from '../constants/auth';
import { REGISTRATION_SUCCEEDED } from '../constants/users';

const initialState = new Map({
  user: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCEEDED:
      return state.set('user', action.user);
    case REGISTRATION_SUCCEEDED:
      return state.set('user', action.user);
    default:
      return state;
  }
};
