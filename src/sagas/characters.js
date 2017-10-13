import { call, put } from 'redux-saga/effects';
import * as Api from '../utils/api';
import { LOADING } from '../constants/display';
import {
  CHARACTERS_FETCH_SUCCEEDED,
  CHARACTERS_FETCH_FAILED,
} from '../constants/characters';

function* fetchCharacters() {
  try {
    yield put({ type: LOADING, payload: true });
    const characters = yield call(Api.fetchCharacters);
    yield put({ type: CHARACTERS_FETCH_SUCCEEDED, characters: characters.data.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: CHARACTERS_FETCH_FAILED, message: e.message });
  }
}

export default fetchCharacters;

