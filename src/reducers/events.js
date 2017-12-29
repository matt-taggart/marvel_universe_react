import { Map } from 'immutable';
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
      return state.set('events', action.events);
    case EVENTS_SEARCH_SUCCEEDED:
      return state.set('events', action.events);
    case SELECTED_EVENT_FETCH_SUCCEEDED:
      return state.set('selectedEvent', action.event);
    default:
      return state;
  }
};
