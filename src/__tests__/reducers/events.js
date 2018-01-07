import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Map } from 'immutable';
import reducer from '../../reducers/events';
import { 
  EVENTS_FETCH_SUCCEEDED,
  SELECTED_EVENT_FETCH_SUCCEEDED,
  EVENTS_SEARCH_SUCCEEDED,
} from '../../constants/events';

Enzyme.configure({ adapter: new Adapter() });

describe('Events Reducer', () => {
  const initialState = new Map({
    events: [],
    selectedEvent: {},
  });

  it('Should return the initial state', () => {    
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle EVENTS_FETCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: EVENTS_FETCH_SUCCEEDED,
        events: [
          { id: 1, name: 'spiderman' },
        ],
      }),
    ).toEqual(new Map({
      events: [
        { id: 1, name: 'spiderman' },
      ],
    }));
  });

  it('Should handle EVENTS_SEARCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: EVENTS_SEARCH_SUCCEEDED,
        events: [
          { id: 1, name: 'spiderman' },
        ],
      }),
    ).toEqual(new Map({
      events: [
        { id: 1, name: 'spiderman' },
      ],
    }));
  });

  it('Should handle SELECTED_EVENT_FETCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: SELECTED_EVENT_FETCH_SUCCEEDED,
        event: { id: 1, name: 'spiderman' },
      }),
    ).toEqual(new Map({
      selectedEvent: { id: 1, name: 'spiderman' },
    }));
  });
});
