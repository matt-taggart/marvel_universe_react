import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../utils/api';
import { LOADING } from '../constants/display';
import {
  CREATORS_FETCH_SUCCEEDED,
  CREATORS_FETCH_FAILED,
  GET_CREATORS,
} from '../constants/creators';

function* fetchCreators() {
  try {
    yield put({ type: LOADING, payload: true });
    const creators = yield call(Api.fetchCreators);
    yield put({ type: CREATORS_FETCH_SUCCEEDED, creators: creators.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: CREATORS_FETCH_FAILED, message: e.message });
  }
}

function* getCreators() {
  yield takeEvery(GET_CREATORS, fetchCreators);
}

export default getCreators;
