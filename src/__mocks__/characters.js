import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import {
  CHARACTERS_FETCH_SUCCEEDED,
  SELECTED_CHARACTER_FETCH_SUCCEEDED,
  CHARACTERS_SEARCH_SUCCEEDED,
} from '../constants/characters';

const mockFetchCharactersApiResponse = jest.fn()
  .mockReturnValue({
    data: {
      data: [{
        username: 'Pikachu',
        email: 'pikachu@pokemon.com',
      }],
    },
  });

export const fetchCharacters = function* fetchCharacters() {
  try {
    yield put({ type: LOADING, payload: true });
    const characters = yield call(mockFetchCharactersApiResponse);

    yield put({ type: CHARACTERS_FETCH_SUCCEEDED, characters: characters.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};
  
export const fetchSelectedCharacter = function* fetchSelectedCharacter({ id }) {
  try {
    yield put({ type: LOADING, payload: true });
    const character = yield call(mockFetchCharactersApiResponse, id);

    yield put({ type: SELECTED_CHARACTER_FETCH_SUCCEEDED, character: character.data.data[0] });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};

export const searchCharacters = function* searchCharacters({ searchTerm }) {
  try {
    yield call(delay, 500);
    yield put({ type: LOADING, payload: true });
    const characters = yield call(mockFetchCharactersApiResponse, searchTerm);

    yield put({ type: CHARACTERS_SEARCH_SUCCEEDED, characters: characters.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
};
