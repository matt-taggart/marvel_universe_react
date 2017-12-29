import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import {
  CHARACTERS_FETCH_SUCCEEDED,
  SELECTED_CHARACTER_FETCH_SUCCEEDED,
  GET_CHARACTERS,
  GET_SELECTED_CHARACTER,
  SEARCH_CHARACTERS,
  CHARACTERS_SEARCH_SUCCEEDED,
} from '../constants/characters';

function* fetchCharacters() {
  try {
    yield put({ type: LOADING, payload: true });
    const characters = yield call(Api.fetchCharacters);

    yield put({ type: CHARACTERS_FETCH_SUCCEEDED, characters: characters.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* fetchSelectedCharacter({ id }) {
  try {
    yield put({ type: LOADING, payload: true });
    const character = yield call(Api.fetchSelectedCharacter(id));

    yield put({ type: SELECTED_CHARACTER_FETCH_SUCCEEDED, character: character.data.data[0] });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* searchCharacters({ searchTerm }) {
  try {
    yield call(delay, 500);
    yield put({ type: LOADING, payload: true });
    const characters = yield call(Api.searchCharacters, searchTerm);

    yield put({ type: CHARACTERS_SEARCH_SUCCEEDED, characters: characters.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* getCharacters() {
  yield takeEvery(GET_CHARACTERS, fetchCharacters);
  yield takeEvery(GET_SELECTED_CHARACTER, fetchSelectedCharacter);
  yield takeLatest(SEARCH_CHARACTERS, searchCharacters);
}

export default getCharacters;
