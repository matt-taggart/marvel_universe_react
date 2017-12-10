import { Map } from 'immutable';
import { SIGN_IN_SUCCEEDED } from '../constants/auth';
import { REGISTRATION_SUCCEEDED, USER_FETCH_SUCCEEDED } from '../constants/user';

const initialState = new Map({
  user: {},
  signedIn: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCEEDED:
      return state
        .set('user', action.user)
        .set('signedIn', true);
    case REGISTRATION_SUCCEEDED:
      return state.set('user', action.user);
    case USER_FETCH_SUCCEEDED:
      return state
        .set('user', action.user)
        .set('signedIn', true);
    default:
      return state;
  }
};
