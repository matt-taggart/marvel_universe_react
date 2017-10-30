import { Map } from 'immutable';
import {
  LOADING,
  FETCH_FAILED,
  SET_APPLICATION_ERROR,
  CLEAR_API_ERRORS,
} from '../constants/display';

const initialState = new Map({
  loading: false,
  apiError: {},
  applicationError: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return state.set('loading', action.payload);
    case FETCH_FAILED:
      return state.set('apiError', action.error);
    case SET_APPLICATION_ERROR:
      return state.set('applicationError', action.error);
    case CLEAR_API_ERRORS:
      return state.set('apiError', initialState.get('apiError'));
    default:
      return state;
  }
};
