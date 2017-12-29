import { Map } from 'immutable';
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
      return state.set('comics', action.comics);
    case COMICS_SEARCH_SUCCEEDED:
      return state.set('comics', action.comics);
    case SELECTED_COMIC_FETCH_SUCCEEDED:
      return state.set('selectedComic', action.comic);
    default:
      return state;
  }
};
