import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as Api from '../utils/api';
import history from '../utils/history';
import { LOADING, FETCH_FAILED } from '../constants/display';
import {
  REGISTRATION_ATTEMPT,
  GET_USER,
  REGISTRATION_SUCCEEDED,  
  USER_FETCH_SUCCEEDED,
} from '../constants/user';

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

    yield put({ type: REGISTRATION_SUCCEEDED, user: user.data });
    yield put({ type: LOADING, payload: false });
    yield call(history.push, '/registration-successful');
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* getUser() {
  try {
    yield put({ type: LOADING, payload: true });

    const user = yield call(Api.fetchUser);

    yield put({ type: USER_FETCH_SUCCEEDED, user: user.data });
    yield put({ type: LOADING, payload: false });
  } catch (e) {
    yield put({ type: LOADING, payload: false });
    yield put({ type: FETCH_FAILED, error: e });
  }
}

function* userActions() {
  yield takeEvery(REGISTRATION_ATTEMPT, registerUser);
  yield takeEvery(GET_USER, getUser);
}

export default userActions;
