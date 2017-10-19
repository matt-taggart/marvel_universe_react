import { Map } from 'immutable';
import { CREATORS_FETCH_SUCCEEDED } from '../constants/creators';

const initialState = new Map({
  creators: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATORS_FETCH_SUCCEEDED:
      return state.set('creators', action.creators);
    default:
      return state;
  }
};
