import { Map } from 'immutable';
import {
  SERIES_FETCH_SUCCEEDED,
  SELECTED_SERIES_FETCH_SUCCEEDED,
} from '../constants/series';

const initialState = new Map({
  series: [],
  selectedSeries: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SERIES_FETCH_SUCCEEDED:
      return state.set('series', action.series);
    case SELECTED_SERIES_FETCH_SUCCEEDED:
      return state.set('selectedSeries', action.series);
    default:
      return state;
  }
};
