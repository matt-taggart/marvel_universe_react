import { Map } from 'immutable';
import { CLEAR_API_DATA } from '../constants/display';
import {
  CHARACTERS_FETCH_SUCCEEDED,
  SELECTED_CHARACTER_FETCH_SUCCEEDED,
  CHARACTERS_SEARCH_SUCCEEDED,
} from '../constants/characters';

const initialState = new Map({
  characters: [],
  selectedCharacter: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS_FETCH_SUCCEEDED:
      return state.set('characters', state.get('characters').concat(action.characters));
    case CHARACTERS_SEARCH_SUCCEEDED:
      return state.set('characters', action.characters);
    case SELECTED_CHARACTER_FETCH_SUCCEEDED:
      return state.set('selectedCharacter', action.character);
    case CLEAR_API_DATA:
      return state
        .set('characters', initialState.get('characters'))
        .set('selectedCharacter', initialState.get('selectedCharacter'));
    default:
      return state;
  }
};
