import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import {
  SERIES_FETCH_SUCCEEDED,
  SELECTED_SERIES_FETCH_SUCCEEDED,
  SERIES_SEARCH_SUCCEEDED,
} from '../constants/series';

const mockFetchSeriesApiResponse = jest.fn()
  .mockReturnValue({
    data: {
      data: [{
        id: 5,
        title: 'Wolverine',
      }],
    },
  });

export const fetchSeries = function* fetchSeries() {
  try {
    yield put({ type: LOADING, payload: true });
    const series = yield call(mockFetchSeriesApiResponse);

    yield put({ type: SERIES_FETCH_SUCCEEDED, series: series.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};

export const fetchSelectedSeries = function* fetchSelectedSeries({ id }) {
  try {
    yield put({ type: LOADING, payload: true });
    const series = yield call(mockFetchSeriesApiResponse, id);

    yield put({ type: SELECTED_SERIES_FETCH_SUCCEEDED, series: series.data.data[0] });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};

export const searchSeries = function* searchSeries({ searchTerm }) {
  try {
    yield call(delay, 500);
    yield put({ type: LOADING, payload: true });
    const series = yield call(mockFetchSeriesApiResponse, searchTerm);

    yield put({ type: SERIES_SEARCH_SUCCEEDED, series: series.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};
