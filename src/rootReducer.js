import { combineReducers } from 'redux';
import characters from './reducers/characters';
import comics from './reducers/comics';
import display from './reducers/display';

export default combineReducers({
  characters,
  comics,
  display,
});
