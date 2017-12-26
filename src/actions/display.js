import {
  HIDE_FLASH_MESSAGE,
  SHOW_SAVE_ITEM_ERROR_MODAL,
  HIDE_SAVE_ITEM_ERROR_MODAL,
} from '../constants/display';

export const hideFlashMessage = () => ({ type: HIDE_FLASH_MESSAGE });
export const showSaveItemErrorModal = () => ({ type: SHOW_SAVE_ITEM_ERROR_MODAL });
export const hideSaveItemErrorModal = () => ({ type: HIDE_SAVE_ITEM_ERROR_MODAL });
