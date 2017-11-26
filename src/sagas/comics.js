import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import {
  COMICS_FETCH_SUCCEEDED,
  SELECTED_COMIC_FETCH_SUCCEEDED,
  GET_COMICS,
  GET_SELECTED_COMIC,
} from '../constants/comics';

function* fetchComics() {
  try {
    yield put({ type: LOADING, payload: true });
    const comics = yield call(Api.fetchComics);

    yield put({ type: COMICS_FETCH_SUCCEEDED, comics: comics.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* fetchSelectedComic({ id }) {
  try {
    yield put({ type: LOADING, payload: true });
    const comic = yield call(Api.fetchSelectedComic(id));

    yield put({ type: SELECTED_COMIC_FETCH_SUCCEEDED, comic: comic.data.data[0] });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* getComics() {
  yield takeEvery(GET_COMICS, fetchComics);
  yield takeEvery(GET_SELECTED_COMIC, fetchSelectedComic);
}

export default getComics;
