import { combineReducers } from 'redux';
import characters from './reducers/characters';
import display from './reducers/display';

export default combineReducers({
  characters,
  display,
});
