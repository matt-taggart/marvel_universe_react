import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { call, takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import {
  fetchEvents,
  fetchSelectedEvent,
  searchEvents,
} from '../../__mocks__/events';

Enzyme.configure({ adapter: new Adapter() });

describe('Events Sagas', () => {

  it('Should test fetch events saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, fetchEvents).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'EVENTS_FETCH_SUCCEEDED', 
        events: [{
          id: 5,
          title: 'Wolverine',
        }]
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });

  it('Should test fetch selected event saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, fetchSelectedEvent, 123).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'SELECTED_EVENT_FETCH_SUCCEEDED', 
        event: {
          id: 5,
          title: 'Wolverine',
        }
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });

  it('Should test search events saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, searchEvents, 123).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'EVENTS_SEARCH_SUCCEEDED', 
        events: [{
          id: 5,
          title: 'Wolverine',
        }]
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });
});
