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
  SERIES_FETCH_SUCCEEDED,
  SELECTED_SERIES_FETCH_SUCCEEDED,
  GET_SERIES,
  GET_SELECTED_SERIES,
  SEARCH_SERIES,
  SERIES_SEARCH_SUCCEEDED,
  SEARCH_SERIES_BY_LETTER,
} from '../constants/series';

function* fetchSeries({ offset }) {
  try {
    yield put({ type: LOADING, payload: true });
    const series = yield call(Api.fetchSeries, offset);
    const { data, total, count } = series.data;

    yield put({ type: SERIES_FETCH_SUCCEEDED, series: data });
    yield put({ type: SET_PAGINATION_DATA, total, count });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* fetchSelectedSeries({ id }) {
  try {
    yield put({ type: LOADING, payload: true });
    const series = yield call(Api.fetchSelectedSeries(id));

    yield put({ type: SELECTED_SERIES_FETCH_SUCCEEDED, series: series.data.data[0] });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* searchSeries({ searchTerm }) {
  try {
    yield put({ type: SET_SEARCH_TERM, payload: searchTerm });
    yield call(delay, 500);
    yield put({ type: LOADING, payload: true });
    const series = yield call(Api.searchSeries, searchTerm);
    const { data, total, count } = series.data;

    yield put({ type: SERIES_SEARCH_SUCCEEDED, series: data });
    yield put({ type: SET_PAGINATION_DATA, total, count });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* searchSeriesByLetter({ searchTerm }) {
  try {
    yield put({ type: SET_LETTER, letter: searchTerm });
    yield put({ type: CLEAR_SEARCH_TERM });    
    yield put({ type: LOADING, payload: true });
    const series = yield call(Api.searchSeries, searchTerm);
    const { data, total, count } = series.data;

    yield put({ type: SERIES_SEARCH_SUCCEEDED, series: data });
    yield put({ type: SET_PAGINATION_DATA, total, count });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* getSeries() {
  yield takeEvery(GET_SERIES, fetchSeries);
  yield takeEvery(GET_SELECTED_SERIES, fetchSelectedSeries);
  yield takeLatest(SEARCH_SERIES, searchSeries);
  yield takeLatest(SEARCH_SERIES_BY_LETTER, searchSeriesByLetter);
}

export default getSeries;
