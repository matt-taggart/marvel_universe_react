import { Map } from 'immutable';
import {
  EVENTS_FETCH_SUCCEEDED,
  EVENTS_FETCH_FAILED,
} from '../constants/events';

const initialState = new Map({
  events: [],
  error: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_FETCH_SUCCEEDED:
      return state.set('events', action.events);
    case EVENTS_FETCH_FAILED:
      return state.set('error', true);
    default:
      return state;
  }
};
