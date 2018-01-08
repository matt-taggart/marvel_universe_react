import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import {
  EVENTS_FETCH_SUCCEEDED,
  SELECTED_EVENT_FETCH_SUCCEEDED,
  EVENTS_SEARCH_SUCCEEDED,
} from '../constants/events';

const mockFetchEventsApiResponse = jest.fn()
  .mockReturnValue({
    data: {
      data: [{
        id: 5,
        title: 'Wolverine',
      }],
    },
  });

export const fetchEvents = function* fetchEvents() {
  try {
    yield put({ type: LOADING, payload: true });
    const events = yield call(mockFetchEventsApiResponse);

    yield put({ type: EVENTS_FETCH_SUCCEEDED, events: events.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};

export const fetchSelectedEvent = function* fetchSelectedEvent({ id }) {
  try {
    yield put({ type: LOADING, payload: true });
    const event = yield call(mockFetchEventsApiResponse, id);

    yield put({ type: SELECTED_EVENT_FETCH_SUCCEEDED, event: event.data.data[0] });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};

export const searchEvents = function* searchEvents({ searchTerm }) {
  try {
    yield call(delay, 500);
    yield put({ type: LOADING, payload: true });
    const events = yield call(mockFetchEventsApiResponse, searchTerm);

    yield put({ type: EVENTS_SEARCH_SUCCEEDED, events: events.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};
