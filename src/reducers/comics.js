import { Map } from 'immutable';
import { COMICS_FETCH_SUCCEEDED } from '../constants/comics';

const initialState = new Map({
  comics: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case COMICS_FETCH_SUCCEEDED:
      return state.set('comics', action.comics);
    default:
      return state;
  }
};
