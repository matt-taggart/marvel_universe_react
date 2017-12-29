import { Map } from 'immutable';
import {
  CREATORS_FETCH_SUCCEEDED,
  SELECTED_CREATOR_FETCH_SUCCEEDED,
  CREATORS_SEARCH_SUCCEEDED,
} from '../constants/creators';

const initialState = new Map({
  creators: [],
  selectedCreator: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATORS_FETCH_SUCCEEDED:
      return state.set('creators', action.creators);
    case CREATORS_SEARCH_SUCCEEDED:
      return state.set('creators', action.creators);
    case SELECTED_CREATOR_FETCH_SUCCEEDED:
      return state.set('selectedCreator', action.creator);
    default:
      return state;
  }
};
