import { Map } from 'immutable';
import {
  COMICS_FETCH_SUCCEEDED,
  COMICS_FETCH_FAILED,
} from '../constants/comics';

const initialState = new Map({
  comics: [],
  error: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case COMICS_FETCH_SUCCEEDED:
      return state.set('comics', action.comics);
    case COMICS_FETCH_FAILED:
      return state.set('error', true);
    default:
      return state;
  }
};
