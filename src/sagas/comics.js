import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as Api from '../utils/api';
import {
  LOADING,
  FETCH_FAILED,
  SET_PAGINATION_DATA,
} from '../constants/display';
import {
  COMICS_FETCH_SUCCEEDED,
  SELECTED_COMIC_FETCH_SUCCEEDED,
  GET_COMICS,
  GET_SELECTED_COMIC,
  SEARCH_COMICS,
  COMICS_SEARCH_SUCCEEDED,
} from '../constants/comics';

function* fetchComics({ offset }) {
  try {
    yield put({ type: LOADING, payload: true });
    const comics = yield call(Api.fetchComics, offset);
    const { data, total, count } = comics.data;

    yield put({ type: COMICS_FETCH_SUCCEEDED, comics: data });
    yield put({ type: SET_PAGINATION_DATA, total, count });
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

function* searchComics({ searchTerm }) {
  try {
    yield call(delay, 500);
    yield put({ type: LOADING, payload: true });
    const comics = yield call(Api.searchComics, searchTerm);
    const { data, total, count } = comics.data;

    yield put({ type: COMICS_SEARCH_SUCCEEDED, comics: data });
    yield put({ type: SET_PAGINATION_DATA, total, count });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* getComics() {
  yield takeEvery(GET_COMICS, fetchComics);
  yield takeEvery(GET_SELECTED_COMIC, fetchSelectedComic);
  yield takeLatest(SEARCH_COMICS, searchComics);
}

export default getComics;
