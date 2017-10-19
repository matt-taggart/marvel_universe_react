import { Map } from 'immutable';
import { CHARACTERS_FETCH_SUCCEEDED } from '../constants/characters';

const initialState = new Map({
  characters: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS_FETCH_SUCCEEDED:
      return state.set('characters', action.characters);
    default:
      return state;
  }
};
