import charactersSaga from './characters';
import comicsSaga from './comics';
import creatorsSaga from './creators';
import eventsSaga from './events';
import authSaga from './auth';

export default function* root() {
  yield [
    charactersSaga(),
    comicsSaga(),
    creatorsSaga(),
    eventsSaga(),
    authSaga(),
  ];
}
