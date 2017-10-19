import charactersSaga from './characters';
import comicsSaga from './comics';
import creatorsSaga from './creators';
import eventsSaga from './events';

export default function* root() {
  yield [
    charactersSaga(),
    comicsSaga(),
    creatorsSaga(),
    eventsSaga(),
  ];
}
