import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as Api from '../utils/api';
import {
  LOADING,
  FETCH_FAILED,
  SET_SEARCH_TERM,
  CLEAR_SEARCH_TERM,
  SET_PAGINATION_DATA,
  SET_LETTER,
} from '../constants/display';
import {
  COMICS_FETCH_SUCCEEDED,
  SELECTED_COMIC_FETCH_SUCCEEDED,
  GET_COMICS,
  GET_SELECTED_COMIC,
  SEARCH_COMICS,
  COMICS_SEARCH_SUCCEEDED,
  SEARCH_COMICS_BY_LETTER,
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
    yield put({ type: SET_SEARCH_TERM, payload: searchTerm });    
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

function* searchComicsByLetter({ searchTerm }) {
  try {
    yield put({ type: SET_LETTER, letter: searchTerm });
    yield put({ type: CLEAR_SEARCH_TERM });    
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
  yield takeLatest(SEARCH_COMICS_BY_LETTER, searchComicsByLetter);
}

export default getComics;
