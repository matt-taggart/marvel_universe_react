import { Map } from 'immutable';
import { CLEAR_API_DATA } from '../constants/display';
import {
  SERIES_FETCH_SUCCEEDED,
  SELECTED_SERIES_FETCH_SUCCEEDED,
  SERIES_SEARCH_SUCCEEDED,
} from '../constants/series';

const initialState = new Map({
  series: [],
  selectedSeries: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SERIES_FETCH_SUCCEEDED:
      return state.set('series', state.get('series').concat(action.series));
    case SERIES_SEARCH_SUCCEEDED:
      return state.set('series', action.series);
    case SELECTED_SERIES_FETCH_SUCCEEDED:
      return state.set('selectedSeries', action.series);
    case CLEAR_API_DATA:
      return state
        .set('series', initialState.get('series'))
        .set('selectedSeries', initialState.get('selectedSeries'));
    default:
      return state;
  }
};
