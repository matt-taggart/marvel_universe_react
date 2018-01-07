import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Map } from 'immutable';
import reducer from '../../reducers/creators';
import { 
  CREATORS_FETCH_SUCCEEDED,
  SELECTED_CREATOR_FETCH_SUCCEEDED,
  CREATORS_SEARCH_SUCCEEDED,
} from '../../constants/creators';

Enzyme.configure({ adapter: new Adapter() });

describe('Comics Reducer', () => {
  const initialState = new Map({
    creators: [],
    selectedCreator: {},
  });

  it('Should return the initial state', () => {    
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle CREATORS_FETCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: CREATORS_FETCH_SUCCEEDED,
        creators: [
          { id: 1, name: 'spiderman' },
        ],
      }),
    ).toEqual(new Map({
      creators: [
        { id: 1, name: 'spiderman' },
      ],
    }));
  });

  it('Should handle CREATORS_SEARCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: CREATORS_SEARCH_SUCCEEDED,
        creators: [
          { id: 1, name: 'spiderman' },
        ],
      }),
    ).toEqual(new Map({
      creators: [
        { id: 1, name: 'spiderman' },
      ],
    }));
  });

  it('Should handle SELECTED_CREATOR_FETCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: SELECTED_CREATOR_FETCH_SUCCEEDED,
        creator: { id: 1, name: 'spiderman' },
      }),
    ).toEqual(new Map({
      selectedCreator: { id: 1, name: 'spiderman' },
    }));
  });
});
