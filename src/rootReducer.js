import { combineReducers } from 'redux';
import characters from './reducers/characters';
import comics from './reducers/comics';
import creators from './reducers/creators';
import display from './reducers/display';

export default combineReducers({
  characters,
  comics,
  creators,
  display,
});
