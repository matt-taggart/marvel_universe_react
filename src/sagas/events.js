import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import { EVENTS_FETCH_SUCCEEDED, GET_EVENTS } from '../constants/events';

function* fetchEvents() {
  try {
    yield put({ type: LOADING, payload: true });
    const events = yield call(Api.fetchEvents);
    yield put({ type: EVENTS_FETCH_SUCCEEDED, events: events.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* getEvents() {
  yield takeEvery(GET_EVENTS, fetchEvents);
}

export default getEvents;
