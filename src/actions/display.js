import {
  HIDE_FLASH_MESSAGE,
  SHOW_SAVE_ITEM_ERROR_MODAL,
  HIDE_SAVE_ITEM_ERROR_MODAL,
  HIDE_SERVER_ERROR_MODAL,
  CLEAR_API_DATA,
  CLEAR_SEARCH_TERM,
} from '../constants/display';

export const hideFlashMessage = () => ({ type: HIDE_FLASH_MESSAGE });
export const showSaveItemErrorModal = () => ({ type: SHOW_SAVE_ITEM_ERROR_MODAL });
export const hideSaveItemErrorModal = () => ({ type: HIDE_SAVE_ITEM_ERROR_MODAL });
export const hideServerErrorModal = () => ({ type: HIDE_SERVER_ERROR_MODAL });
export const clearApiData = () => ({ type: CLEAR_API_DATA });
export const clearSearchTerm = () => ({ type: CLEAR_SEARCH_TERM });
