import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as Api from '../utils/api';
import {
  LOADING,
  FETCH_FAILED,
  SET_PAGINATION_DATA,
} from '../constants/display';
import {
  CREATORS_FETCH_SUCCEEDED,
  SELECTED_CREATOR_FETCH_SUCCEEDED,
  GET_CREATORS,
  GET_SELECTED_CREATOR,
  SEARCH_CREATORS,
  CREATORS_SEARCH_SUCCEEDED,
} from '../constants/creators';

function* fetchCreators({ offset }) {
  try {
    yield put({ type: LOADING, payload: true });
    const creators = yield call(Api.fetchCreators, offset);
    const { data, total, count } = creators.data;

    yield put({ type: CREATORS_FETCH_SUCCEEDED, creators: data });
    yield put({ type: SET_PAGINATION_DATA, total, count });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* fetchSelectedCreator({ id }) {
  try {
    yield put({ type: LOADING, payload: true });
    const creator = yield call(Api.fetchSelectedCreator(id));

    yield put({ type: SELECTED_CREATOR_FETCH_SUCCEEDED, creator: creator.data.data[0] });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* searchCreators({ searchTerm }) {
  try {
    yield call(delay, 500);
    yield put({ type: LOADING, payload: true });
    const creators = yield call(Api.searchCreators, searchTerm);
    const { data, total, count } = creators.data;

    yield put({ type: CREATORS_SEARCH_SUCCEEDED, creators: data });
    yield put({ type: SET_PAGINATION_DATA, total, count });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* getCreators() {
  yield takeEvery(GET_CREATORS, fetchCreators);
  yield takeEvery(GET_SELECTED_CREATOR, fetchSelectedCreator);
  yield takeLatest(SEARCH_CREATORS, searchCreators);
}

export default getCreators;
