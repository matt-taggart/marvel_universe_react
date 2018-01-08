import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { call, takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import {
  fetchSeries,
  fetchSelectedSeries,
  searchSeries,
} from '../../__mocks__/series';

Enzyme.configure({ adapter: new Adapter() });

describe('Series Sagas', () => {

  it('Should test fetch series saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, fetchSeries).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'SERIES_FETCH_SUCCEEDED', 
        series: [{
          id: 5,
          title: 'Wolverine',
        }]
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });

  it('Should test fetch selected series saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, fetchSelectedSeries, 123).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'SELECTED_SERIES_FETCH_SUCCEEDED', 
        series: {
          id: 5,
          title: 'Wolverine',
        }
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });

  it('Should test search series saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, searchSeries, 123).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'SERIES_SEARCH_SUCCEEDED', 
        series: [{
          id: 5,
          title: 'Wolverine',
        }]
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });
});
