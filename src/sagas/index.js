import charactersSaga from './characters';
import comicsSaga from './comics';

export default function* root() {
  yield [
    charactersSaga(),
    comicsSaga(),
  ];
}
