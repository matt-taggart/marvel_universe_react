import { Map } from 'immutable';
import {
  LOADING,
  FETCH_FAILED,
  SET_APPLICATION_ERROR,
  CLEAR_API_ERRORS,
  SHOW_FLASH_MESSAGE,
  HIDE_FLASH_MESSAGE,
  SHOW_SAVE_ITEM_ERROR_MODAL,
  HIDE_SAVE_ITEM_ERROR_MODAL,
  HIDE_SERVER_ERROR_MODAL,
  SET_PAGINATION_DATA,
  CLEAR_API_DATA,
  SET_SEARCH_TERM,
  CLEAR_SEARCH_TERM,
  SET_LETTER,
  CLEAR_LETTER,
} from '../constants/display';

const initialState = new Map({
  loading: false,
  apiError: false,
  apiErrorPayload: {},
  applicationError: {},
  displayFlashMessage: false,
  showSaveItemErrorModal: false,
  searchTerm: '',
  prevLetter: null,
  letter: null,
  count: 0,
  total: 0,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return state.set('loading', action.payload);
    case FETCH_FAILED:
      return state
        .set('apiError', true)
        .set('apiErrorPayload', action.error);
    case SET_APPLICATION_ERROR:
      return state.set('applicationError', action.error);
    case CLEAR_API_ERRORS:
      return state.set('apiError', initialState.get('apiError'));
    case SHOW_FLASH_MESSAGE:
      return state.set('displayFlashMessage', true);
    case HIDE_FLASH_MESSAGE:
      return state.set('displayFlashMessage', false);
    case SHOW_SAVE_ITEM_ERROR_MODAL:
      return state.set('showSaveItemErrorModal', true);
    case HIDE_SAVE_ITEM_ERROR_MODAL:
      return state.set('showSaveItemErrorModal', false);
    case HIDE_SERVER_ERROR_MODAL:
      return state
        .set('apiError', false)
        .set('apiErrorPayload', initialState.get('apiErrorPayload'));
    case SET_SEARCH_TERM:
      return state.set('searchTerm', action.payload);
    case CLEAR_SEARCH_TERM:
      return state.set('searchTerm', initialState.get('searchTerm'));
    case SET_PAGINATION_DATA:
      return state
        .set('count', action.count)
        .set('total', action.total);
    case CLEAR_API_DATA:
      return state
        .set('count', initialState.get('count'))
        .set('total', initialState.get('total'));
    case SET_LETTER:
      return state
        .set('letter', action.letter)
        .set('prevLetter', state.get('letter'));
    case CLEAR_LETTER:
      return state.set('letter', initialState.get('letter'));
    default:
      return state;
  }
};
