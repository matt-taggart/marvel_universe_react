import { Map } from 'immutable';
import {
  CHARACTERS_FETCH_SUCCEEDED,
  CHARACTERS_FETCH_FAILED,
} from '../constants/characters';

const initialState = new Map({
  characters: [],
  error: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS_FETCH_SUCCEEDED:
      return state.set('characters', action.characters);
    case CHARACTERS_FETCH_FAILED:
      return state.set('error', true);
    default:
      return state;
  }
};
