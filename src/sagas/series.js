import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import {
  SERIES_FETCH_SUCCEEDED,
  SELECTED_SERIES_FETCH_SUCCEEDED,
  GET_SERIES,
  GET_SELECTED_SERIES,
  SEARCH_SERIES,
  SERIES_SEARCH_SUCCEEDED,
} from '../constants/series';

function* fetchSeries() {
  try {
    yield put({ type: LOADING, payload: true });
    const series = yield call(Api.fetchSeries);

    yield put({ type: SERIES_FETCH_SUCCEEDED, series: series.data.data });
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
    yield call(delay, 500);
    yield put({ type: LOADING, payload: true });
    const series = yield call(Api.searchSeries, searchTerm);

    yield put({ type: SERIES_SEARCH_SUCCEEDED, series: series.data.data });
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
}

export default getSeries;
