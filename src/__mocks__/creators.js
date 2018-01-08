import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import {
  CREATORS_FETCH_SUCCEEDED,
  SELECTED_CREATOR_FETCH_SUCCEEDED,
  CREATORS_SEARCH_SUCCEEDED,
} from '../constants/creators';

const mockFetchCreatorsApiResponse = jest.fn()
  .mockReturnValue({
    data: {
      data: [{
        id: 5,
        fullName: 'Stan Lee',
      }],
    },
  });

export const fetchCreators = function* fetchCreators() {
  try {
    yield put({ type: LOADING, payload: true });
    const creators = yield call(mockFetchCreatorsApiResponse);

    yield put({ type: CREATORS_FETCH_SUCCEEDED, creators: creators.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};

export const fetchSelectedCreator = function* fetchSelectedCreator({ id }) {
  try {
    yield put({ type: LOADING, payload: true });
    const creator = yield call(mockFetchCreatorsApiResponse, id);

    yield put({ type: SELECTED_CREATOR_FETCH_SUCCEEDED, creator: creator.data.data[0] });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};

export const searchCreators = function* searchCreators({ searchTerm }) {
  try {
    yield call(delay, 500);
    yield put({ type: LOADING, payload: true });
    const creators = yield call(mockFetchCreatorsApiResponse, searchTerm);

    yield put({ type: CREATORS_SEARCH_SUCCEEDED, creators: creators.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};
