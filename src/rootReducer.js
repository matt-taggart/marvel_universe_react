import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import characters from './reducers/characters';
import comics from './reducers/comics';
import creators from './reducers/creators';
import events from './reducers/events';
import series from './reducers/series';
import display from './reducers/display';
import user from './reducers/user';

export default combineReducers({
  characters,
  comics,
  creators,
  events,
  series,
  user,
  display,
  form: formReducer,
});
