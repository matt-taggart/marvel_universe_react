import { Map } from 'immutable';
import {
  CREATORS_FETCH_SUCCEEDED,
  CREATORS_FETCH_FAILED,
} from '../constants/creators';

const initialState = new Map({
  creators: [],
  error: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATORS_FETCH_SUCCEEDED:
      return state.set('creators', action.creators);
    case CREATORS_FETCH_FAILED:
      return state.set('error', true);
    default:
      return state;
  }
};
