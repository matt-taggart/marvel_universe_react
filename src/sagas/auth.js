import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import { SIGN_IN_SUCCEEDED, SIGN_IN_ATTEMPT } from '../constants/auth';

function* signIn() {
  try {
    yield put({ type: LOADING, payload: true });

    const credentials = yield select(state => ({
      email: state.form.signIn.values.email,
      password: state.form.signIn.values.password,
    }));

    const user = yield call(Api.signIn, credentials);

    yield put({ type: SIGN_IN_SUCCEEDED, user });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* signInAttempt() {
  yield takeEvery(SIGN_IN_ATTEMPT, signIn);
}

export default signInAttempt;
