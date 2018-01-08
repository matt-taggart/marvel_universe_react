import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import {
  COMICS_FETCH_SUCCEEDED,
  SELECTED_COMIC_FETCH_SUCCEEDED,
  COMICS_SEARCH_SUCCEEDED,
} from '../constants/comics';

const mockFetchComicsApiResponse = jest.fn()
  .mockReturnValue({
    data: {
      data: [{
        title: 'Spiderman',
        issueNumber: 5,
      }],
    },
  });

export const fetchComics = function* fetchComics() {
  try {
    yield put({ type: LOADING, payload: true });
    const comics = yield call(mockFetchComicsApiResponse);

    yield put({ type: COMICS_FETCH_SUCCEEDED, comics: comics.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};

export const fetchSelectedComic = function* fetchSelectedComic({ id }) {
  try {
    yield put({ type: LOADING, payload: true });
    const comic = yield call(mockFetchComicsApiResponse, id);

    yield put({ type: SELECTED_COMIC_FETCH_SUCCEEDED, comic: comic.data.data[0] });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};

export const searchComics = function* searchComics({ searchTerm }) {
  try {
    yield call(delay, 500);
    yield put({ type: LOADING, payload: true });
    const comics = yield call(mockFetchComicsApiResponse, searchTerm);

    yield put({ type: COMICS_SEARCH_SUCCEEDED, comics: comics.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};
