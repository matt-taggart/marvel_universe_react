import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import { COMICS_FETCH_SUCCEEDED, GET_COMICS } from '../constants/comics';

function* fetchComics() {
  try {
    yield put({ type: LOADING, payload: true });
    const comics = yield call(Api.fetchComics);
    yield put({ type: COMICS_FETCH_SUCCEEDED, comics: comics.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, message: e.message });
  }
}

function* getComics() {
  yield takeEvery(GET_COMICS, fetchComics);
}

export default getComics;
