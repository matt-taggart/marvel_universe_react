import { Map } from 'immutable';
import {
  LOADING,
  FETCH_FAILED,
  SET_APPLICATION_ERROR,
  CLEAR_API_ERRORS,
  SHOW_FLASH_MESSAGE,
  HIDE_FLASH_MESSAGE,
} from '../constants/display';

const initialState = new Map({
  loading: false,
  apiError: {},
  applicationError: {},
  displayFlashMessage: false,
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
    case SHOW_FLASH_MESSAGE:
      return state.set('displayFlashMessage', true);
    case HIDE_FLASH_MESSAGE:
      return state.set('displayFlashMessage', false);
    default:
      return state;
  }
};
