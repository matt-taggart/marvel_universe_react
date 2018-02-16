import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as Api from '../utils/api';
import {
  LOADING,
  FETCH_FAILED,
  SET_SEARCH_TERM,
  SET_PAGINATION_DATA,
  SET_LETTER,
} from '../constants/display';
import {
  CHARACTERS_FETCH_SUCCEEDED,
  SELECTED_CHARACTER_FETCH_SUCCEEDED,
  GET_CHARACTERS,
  GET_SELECTED_CHARACTER,
  SEARCH_CHARACTERS,
  CHARACTERS_SEARCH_SUCCEEDED,
  SEARCH_CHARACTERS_BY_LETTER,
} from '../constants/characters';

function* fetchCharacters({ offset }) {
  try {
    yield put({ type: LOADING, payload: true });
    const characters = yield call(Api.fetchCharacters, offset);
    const { data, total, count } = characters.data;

    yield put({ type: CHARACTERS_FETCH_SUCCEEDED, characters: data });
    yield put({ type: SET_PAGINATION_DATA, total, count });
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
    yield put({ type: SET_SEARCH_TERM, payload: searchTerm });    
    yield call(delay, 500);
    yield put({ type: LOADING, payload: true });
    const characters = yield call(Api.searchCharacters, searchTerm);
    const { data, total, count } = characters.data;

    yield put({ type: CHARACTERS_SEARCH_SUCCEEDED, characters: data });
    yield put({ type: SET_PAGINATION_DATA, total, count });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* searchCharactersByLetter({ searchTerm }) {
  try {
    yield put({ type: SET_LETTER, letter: searchTerm });
    yield put({ type: LOADING, payload: true });
    const characters = yield call(Api.searchCharacters, searchTerm);
    const { data, total, count } = characters.data;

    yield put({ type: CHARACTERS_SEARCH_SUCCEEDED, characters: data });
    yield put({ type: SET_PAGINATION_DATA, total, count });
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
  yield takeLatest(SEARCH_CHARACTERS_BY_LETTER, searchCharactersByLetter);
}

export default getCharacters;
