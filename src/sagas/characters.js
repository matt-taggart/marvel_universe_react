import { call, put } from 'redux-saga/effects';
import * as Api from '../utils/api';
import {
  CHARACTERS_FETCH_SUCCEEDED,
  CHARACTERS_FETCH_FAILED,
} from '../constants/characters';

function* fetchCharacters() {
  try {
    const characters = yield call(Api.fetchCharacters);
    yield put({ type: CHARACTERS_FETCH_SUCCEEDED, characters: characters.data.data });
  } catch (e) {
    yield put({ type: CHARACTERS_FETCH_FAILED, message: e.message });
  }
}

export default fetchCharacters;

