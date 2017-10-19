import { Map } from 'immutable';
import {
  EVENTS_FETCH_SUCCEEDED,
} from '../constants/events';

const initialState = new Map({
  events: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_FETCH_SUCCEEDED:
      return state.set('events', action.events);
    default:
      return state;
  }
};
