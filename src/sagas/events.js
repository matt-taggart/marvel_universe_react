import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as Api from '../utils/api';
import {
  LOADING,
  FETCH_FAILED,
  SET_PAGINATION_DATA,
} from '../constants/display';
import {
  EVENTS_FETCH_SUCCEEDED,
  SELECTED_EVENT_FETCH_SUCCEEDED,
  GET_EVENTS,
  GET_SELECTED_EVENT,
  SEARCH_EVENTS,
  EVENTS_SEARCH_SUCCEEDED,
} from '../constants/events';

function* fetchEvents({ offset }) {
  try {
    yield put({ type: LOADING, payload: true });
    const events = yield call(Api.fetchEvents, offset);
    const { data, total, count } = events.data;

    yield put({ type: EVENTS_FETCH_SUCCEEDED, events: data });
    yield put({ type: SET_PAGINATION_DATA, total, count });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* fetchSelectedEvent({ id }) {
  try {
    yield put({ type: LOADING, payload: true });
    const event = yield call(Api.fetchSelectedEvent(id));

    yield put({ type: SELECTED_EVENT_FETCH_SUCCEEDED, event: event.data.data[0] });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* searchEvents({ searchTerm }) {
  try {
    yield call(delay, 500);
    yield put({ type: LOADING, payload: true });
    const events = yield call(Api.searchEvents, searchTerm);
    const { data, total, count } = events.data;

    yield put({ type: EVENTS_SEARCH_SUCCEEDED, events: data });
    yield put({ type: SET_PAGINATION_DATA, total, count });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* getEvents() {
  yield takeEvery(GET_EVENTS, fetchEvents);
  yield takeEvery(GET_SELECTED_EVENT, fetchSelectedEvent);
  yield takeLatest(SEARCH_EVENTS, searchEvents);
}

export default getEvents;
