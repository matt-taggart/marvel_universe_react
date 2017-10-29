import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as Api from '../utils/api';
import { LOADING, FETCH_FAILED } from '../constants/display';
import { REGISTRATION_SUCCEEDED, REGISTRATION_ATTEMPT } from '../constants/users';

function* registerUser() {
  try {
    yield put({ type: LOADING, payload: true });

    const payload = yield select(state => ({
      name: state.form.register.values.name,
      email: state.form.register.values.email,
      password: state.form.register.values.password,
      age: state.form.register.values.age,
      gender: state.form.register.values.gender,
    }));

    const user = yield call(Api.register, payload);

    yield put({ type: REGISTRATION_SUCCEEDED, user });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* registerAttempt() {
  yield takeEvery(REGISTRATION_ATTEMPT, registerUser);
}

export default registerAttempt;
