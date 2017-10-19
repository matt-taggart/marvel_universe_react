import { combineReducers } from 'redux';
import characters from './reducers/characters';
import comics from './reducers/comics';
import creators from './reducers/creators';
import events from './reducers/events';
import display from './reducers/display';

export default combineReducers({
  characters,
  comics,
  creators,
  events,
  display,
});
