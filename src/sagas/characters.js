import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import {
  CHARACTERS_FETCH_SUCCEEDED,
  SELECTED_CHARACTER_FETCH_SUCCEEDED,
  GET_CHARACTERS,
  GET_SELECTED_CHARACTER,
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
    yield put({ type: SELECTED_CHARACTER_FETCH_SUCCEEDED, character: character.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* getCharacters() {
  yield takeEvery(GET_CHARACTERS, fetchCharacters);
  yield takeEvery(GET_SELECTED_CHARACTER, fetchSelectedCharacter);
}

export default getCharacters;
