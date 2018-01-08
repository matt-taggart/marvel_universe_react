import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { call, takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import {
  fetchCreators,
  fetchSelectedCreator,
  searchCreators,
} from '../../__mocks__/creators';

Enzyme.configure({ adapter: new Adapter() });

describe('Creators Sagas', () => {

  it('Should test fetch creators saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, fetchCreators).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'CREATORS_FETCH_SUCCEEDED', 
        creators: [{
          id: 5,
          fullName: 'Stan Lee',
        }]
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });

  it('Should test fetch selected creator saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, fetchSelectedCreator, 123).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'SELECTED_CREATOR_FETCH_SUCCEEDED', 
        creator: {
          id: 5,
          fullName: 'Stan Lee',
        }
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });

  it('Should test search creators saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, searchCreators, 123).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'CREATORS_SEARCH_SUCCEEDED', 
        creators: [{
          id: 5,
          fullName: 'Stan Lee',
        }]
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });
});
