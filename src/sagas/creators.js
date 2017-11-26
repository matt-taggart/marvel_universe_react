import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import {
  CREATORS_FETCH_SUCCEEDED,
  SELECTED_CREATOR_FETCH_SUCCEEDED,
  GET_CREATORS,
  GET_SELECTED_CREATOR,
} from '../constants/creators';

function* fetchCreators() {
  try {
    yield put({ type: LOADING, payload: true });
    const creators = yield call(Api.fetchCreators);

    yield put({ type: CREATORS_FETCH_SUCCEEDED, creators: creators.data.data });
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

function* getCreators() {
  yield takeEvery(GET_CREATORS, fetchCreators);
  yield takeEvery(GET_SELECTED_CREATOR, fetchSelectedCreator);
}

export default getCreators;
