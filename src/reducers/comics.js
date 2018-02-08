import { Map } from 'immutable';
import { CLEAR_API_DATA } from '../constants/display';
import {
  COMICS_FETCH_SUCCEEDED,
  SELECTED_COMIC_FETCH_SUCCEEDED,
  COMICS_SEARCH_SUCCEEDED,
} from '../constants/comics';

const initialState = new Map({
  comics: [],
  selectedComic: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case COMICS_FETCH_SUCCEEDED:
      return state.set('comics', state.get('comics').concat(action.comics));
    case COMICS_SEARCH_SUCCEEDED:
      return state.set('comics', action.comics);
    case SELECTED_COMIC_FETCH_SUCCEEDED:
      return state.set('selectedComic', action.comic);
    case CLEAR_API_DATA:
      return state
        .set('comics', initialState.get('comics'))
        .set('selectedComic', initialState.get('selectedComic'));
    default:
      return state;
  }
};
