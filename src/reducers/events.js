import { Map } from 'immutable';
import { CLEAR_API_DATA } from '../constants/display';
import {
  EVENTS_FETCH_SUCCEEDED,
  SELECTED_EVENT_FETCH_SUCCEEDED,
  EVENTS_SEARCH_SUCCEEDED,
} from '../constants/events';

const initialState = new Map({
  events: [],
  selectedEvent: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_FETCH_SUCCEEDED:
      return state.set('events', state.get('events').concat(action.events));
    case EVENTS_SEARCH_SUCCEEDED:
      return state.set('events', action.events);
    case SELECTED_EVENT_FETCH_SUCCEEDED:
      return state.set('selectedEvent', action.event);
    case CLEAR_API_DATA:
      return state
        .set('events', initialState.get('events'))
        .set('selectedEvent', initialState.get('selectedEvent'));
    default:
      return state;
  }
};
