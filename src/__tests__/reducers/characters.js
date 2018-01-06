import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Map } from 'immutable';
import reducer from '../../reducers/characters';
import { 
  CHARACTERS_FETCH_SUCCEEDED,
  SELECTED_CHARACTER_FETCH_SUCCEEDED,
  CHARACTERS_SEARCH_SUCCEEDED,
} from '../../constants/characters';

Enzyme.configure({ adapter: new Adapter() });

describe('Characters Reducer', () => {
  const initialState = new Map({
    characters: [],
    selectedCharacter: {},
  });

  it('Should return the inital state', () => {    
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle CHARACTERS_FETCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: CHARACTERS_FETCH_SUCCEEDED,
        characters: [
          { id: 1, name: 'spiderman' },
        ],
      }),
    ).toEqual(new Map({
      characters: [
        { id: 1, name: 'spiderman' },
      ],
    }));
  });

  it('Should handle CHARACTERS_SEARCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: CHARACTERS_SEARCH_SUCCEEDED,
        characters: [
          { id: 1, name: 'spiderman' },
        ],
      }),
    ).toEqual(new Map({
      characters: [
        { id: 1, name: 'spiderman' },
      ],
    }));
  });

  it('Should handle CHARACTERS_SEARCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: SELECTED_CHARACTER_FETCH_SUCCEEDED,
        character: { id: 1, name: 'spiderman' },
      }),
    ).toEqual(new Map({
      selectedCharacter: { id: 1, name: 'spiderman' },
    }));
  });
});
