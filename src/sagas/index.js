import charactersSaga from './characters';
import comicsSaga from './comics';
import creatorsSaga from './creators';

export default function* root() {
  yield [
    charactersSaga(),
    comicsSaga(),
    creatorsSaga(),
  ];
}
