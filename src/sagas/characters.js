import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import { CHARACTERS_FETCH_SUCCEEDED, GET_CHARACTERS } from '../constants/characters';

function* fetchCharacters() {
  try {
    yield put({ type: LOADING, payload: true });
    const characters = yield call(Api.fetchCharacters);
    yield put({ type: CHARACTERS_FETCH_SUCCEEDED, characters: characters.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, message: e.message });
  }
}

function* getCharacters() {
  yield takeEvery(GET_CHARACTERS, fetchCharacters);
}

export default getCharacters;
