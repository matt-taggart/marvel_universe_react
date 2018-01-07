import { call, put, select } from 'redux-saga/effects';
import * as Api from '../utils/api';
import history from '../utils/history';
import { LOADING, FETCH_FAILED } from '../constants/display';
import {
  SIGN_IN_SUCCEEDED,
  LOGOUT_SUCCEEDED,
} from '../constants/auth';

const mockHistory = {
  push: jest.fn(value => value),
};

const mockSignInApiResponse = jest.fn()
  .mockReturnValueOnce({
    data: {
      username: 'Pikachu',
      email: 'pikachu@pokemon.com',
    },
  });

export const signIn = function* signIn() {
  try {
    yield put({ type: LOADING, payload: true });

    const credentials = yield select(state => ({
      email: state.form.signIn.values.email,
      password: state.form.signIn.values.password,
    }));

    const user = yield call(mockSignInApiResponse, credentials);

    yield put({ type: SIGN_IN_SUCCEEDED, user: user.data });
    yield put({ type: LOADING, payload: false });
    yield call(mockHistory.push, '/profile');
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

export const logout = function* logout() {
  try {
    yield put({ type: LOADING, payload: true });
    yield call(Api.logout);
    yield put({ type: LOGOUT_SUCCEEDED });
    yield put({ type: LOADING, payload: false });
    yield call(history.push, '/');
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}