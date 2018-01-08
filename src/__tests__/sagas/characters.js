import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { call, takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import {
  fetchCharacters,
  fetchSelectedCharacter,
  searchCharacters,
} from '../../__mocks__/characters';

Enzyme.configure({ adapter: new Adapter() });

describe('Character Sagas', () => {

  it('Should test fetch characters saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, fetchCharacters).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'CHARACTERS_FETCH_SUCCEEDED', 
        characters: [{
          username: 'Pikachu',
          email: 'pikachu@pokemon.com',
        }]
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });

  it('Should test fetch selected character saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, fetchSelectedCharacter, 123).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'SELECTED_CHARACTER_FETCH_SUCCEEDED', 
        character: {
          username: 'Pikachu',
          email: 'pikachu@pokemon.com',
        }
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });

  it('Should test search characters saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, searchCharacters, 123).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'CHARACTERS_SEARCH_SUCCEEDED', 
        characters: [{
          username: 'Pikachu',
          email: 'pikachu@pokemon.com',
        }]
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });
});
