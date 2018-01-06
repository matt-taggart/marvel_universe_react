import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Map } from 'immutable';
import reducer from '../../reducers/comics';
import { 
  COMICS_FETCH_SUCCEEDED,
  SELECTED_COMIC_FETCH_SUCCEEDED,
  COMICS_SEARCH_SUCCEEDED,
} from '../../constants/comics';

Enzyme.configure({ adapter: new Adapter() });

describe('Comics Reducer', () => {
  const initialState = new Map({
    comics: [],
    selectedComic: {},
  });

  it('Should return the inital state', () => {    
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle COMICS_FETCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: COMICS_FETCH_SUCCEEDED,
        comics: [
          { id: 1, name: 'spiderman' },
        ],
      }),
    ).toEqual(new Map({
      comics: [
        { id: 1, name: 'spiderman' },
      ],
    }));
  });

  it('Should handle COMICS_SEARCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: COMICS_SEARCH_SUCCEEDED,
        comics: [
          { id: 1, name: 'spiderman' },
        ],
      }),
    ).toEqual(new Map({
      comics: [
        { id: 1, name: 'spiderman' },
      ],
    }));
  });

  it('Should handle SELECTED_COMIC_FETCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: SELECTED_COMIC_FETCH_SUCCEEDED,
        comic: { id: 1, name: 'spiderman' },
      }),
    ).toEqual(new Map({
      selectedComic: { id: 1, name: 'spiderman' },
    }));
  });
});
