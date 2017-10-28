import { Map } from 'immutable';
import { LOADING, FETCH_FAILED } from '../constants/display';

const initialState = new Map({
  loading: false,
  error: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return state.set('loading', action.payload);
    case FETCH_FAILED:
      return state.set('error', action.error);
    default:
      return state;
  }
};
