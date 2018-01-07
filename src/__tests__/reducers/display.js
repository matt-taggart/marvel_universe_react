import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Map } from 'immutable';
import reducer from '../../reducers/display';
import {
  LOADING,
  FETCH_FAILED,
  SET_APPLICATION_ERROR,
  CLEAR_API_ERRORS,
  SHOW_FLASH_MESSAGE,
  HIDE_FLASH_MESSAGE,
  SHOW_SAVE_ITEM_ERROR_MODAL,
  HIDE_SAVE_ITEM_ERROR_MODAL,
} from '../../constants/display';

Enzyme.configure({ adapter: new Adapter() });

describe.only('Display Reducer', () => {
  const initialState = new Map({
    loading: false,
    apiError: {},
    applicationError: {},
    displayFlashMessage: false,
    showSaveItemErrorModal: false,
  });

  it('Should return the initial state', () => {    
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle LOADING', () => {
    expect(
      reducer(new Map(), {
        type: LOADING,
        payload: true,
      }),
    ).toEqual(new Map({
      loading: true,
    }));
  });

  it('Should handle FETCH_FAILED', () => {
    expect(
      reducer(new Map(), {
        type: FETCH_FAILED,
        error: {
          statusCode: 401,
          error: 'Unauthorized',
          message: 'Invalid password',
        },
      }),
    ).toEqual(new Map({
      apiError: { 
        statusCode: 401,
        error: 'Unauthorized',
        message: 'Invalid password',
      },
    }));
  });

  it('Should handle SET_APPLICATION_ERROR', () => {
    expect(
      reducer(new Map(), {
        type: SET_APPLICATION_ERROR,
        error: {
          err: 'test error',
          stack: 'test stack',
        },
      }),
    ).toEqual(new Map({
      applicationError: { 
        err: 'test error',
        stack: 'test stack',
      },
    }));
  });

  it('Should handle CLEAR_API_ERRORS', () => {
    expect(
      reducer(new Map(), {
        type: CLEAR_API_ERRORS,
      }),
    ).toEqual(new Map({
      apiError: {},
    }));
  });

  it('Should handle SHOW_FLASH_MESSAGE', () => {
    expect(
      reducer(new Map(), {
        type: SHOW_FLASH_MESSAGE,
      }),
    ).toEqual(new Map({
      displayFlashMessage: true,
    }));
  });

  it('Should handle HIDE_FLASH_MESSAGE', () => {
    expect(
      reducer(new Map(), {
        type: HIDE_FLASH_MESSAGE,
      }),
    ).toEqual(new Map({
      displayFlashMessage: false,
    }));
  });


  it('Should handle SHOW_SAVE_ITEM_ERROR_MODAL', () => {
    expect(
      reducer(new Map(), {
        type: SHOW_SAVE_ITEM_ERROR_MODAL,
      }),
    ).toEqual(new Map({
      showSaveItemErrorModal: true,
    }));
  });

  it('Should handle HIDE_SAVE_ITEM_ERROR_MODAL', () => {
    expect(
      reducer(new Map(), {
        type: HIDE_SAVE_ITEM_ERROR_MODAL,
      }),
    ).toEqual(new Map({
      showSaveItemErrorModal: false,
    }));
  });

});
